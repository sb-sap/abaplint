"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _abap_object_1 = require("./objects/_abap_object");
const config_1 = require("./config");
const issue_1 = require("./issue");
const artifacts_1 = require("./artifacts");
const version_1 = require("./version");
const skip_logic_1 = require("./skip_logic");
class NoProgress {
    set(_total, _text) {
        return undefined;
    }
    tick(_options) {
        return undefined;
    }
}
class Registry {
    constructor(conf) {
        this.dirty = false;
        this.macros = [];
        this.objects = [];
        this.issues = [];
        this.conf = conf ? conf : config_1.Config.getDefault();
    }
    static abaplintVersion() {
        // magic, see build script "version.sh"
        return "1.6.12";
    }
    getObjects() {
        return this.objects;
    }
    getObject(type, name) {
        for (const obj of this.objects) {
            // todo, this is slow
            if (obj.getType() === type && obj.getName().toUpperCase() === name.toUpperCase()) {
                return obj;
            }
        }
        return undefined;
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        // todo, the config can be changed outside of this setConfig method, how to handle?
        // or alternatively not handle, just consider everything as dirty?
        // or have a checksum of the config and dirty on a different level?
        this.setDirty();
        for (const obj of this.getObjects()) {
            obj.setDirty();
        }
        this.conf = conf;
    }
    getABAPObjects() {
        return this.objects.filter((obj) => { return obj instanceof _abap_object_1.ABAPObject; });
    }
    getABAPFiles(progress) {
        if (this.isDirty()) {
            this.parse(progress);
        }
        let ret = [];
        this.getABAPObjects().forEach((a) => { ret = ret.concat(a.getABAPFiles()); });
        return ret;
    }
    getABAPFile(name) {
        const all = this.getABAPFiles();
        for (const file of all) {
            if (file.getFilename() === name) {
                return file;
            }
        }
        return undefined;
    }
    addFile(file) {
        this.setDirty();
        return this.addFiles([file]);
    }
    updateFile(file) {
        this.setDirty();
        const obj = this.find(file.getObjectName(), file.getObjectType());
        obj.updateFile(file);
        return this;
    }
    removeFile(file) {
        this.setDirty();
        const obj = this.find(file.getObjectName(), file.getObjectType());
        obj.removeFile(file);
        if (obj.getFiles().length === 0) {
            this.removeObject(obj);
        }
        return this;
    }
    addFiles(files) {
        this.setDirty();
        for (const f of files) {
            try {
                this.findOrCreate(f.getObjectName(), f.getObjectType()).addFile(f);
            }
            catch (error) {
                this.issues.push(new issue_1.Issue({ file: f, message: error && error.toString() || '', key: "registry_add" }));
            }
        }
        return this;
    }
    setDirty() {
        this.dirty = true;
        this.issues = [];
    }
    isDirty() {
        return this.dirty;
    }
    // assumption: the file is already in the registry
    findObjectForFile(file) {
        for (const obj of this.getObjects()) {
            for (const ofile of obj.getFiles()) {
                if (ofile.getFilename() === file.getFilename()) {
                    return obj;
                }
            }
        }
        return undefined;
    }
    findIssuesFile(file) {
        const obj = this.findObjectForFile(file);
        if (obj === undefined) {
            return [];
        }
        return this.findIssues(undefined, obj);
    }
    findIssues(progress, iobj) {
        if (this.isDirty()) {
            this.parse(progress);
        }
        progress = progress ? progress : new NoProgress();
        let issues = this.issues.slice(0);
        const objects = iobj ? [iobj] : this.getObjects();
        const rules = this.conf.getEnabledRules();
        const skipLogic = new skip_logic_1.SkipLogic(this);
        progress.set(objects.length, ":percent - :elapseds - Finding Issues - :object");
        for (const obj of objects) {
            progress.tick({ object: obj.getType() + " " + obj.getName() });
            if (skipLogic.skip(obj)) {
                continue;
            }
            for (const rule of rules) {
                issues = issues.concat(rule.run(obj, this));
            }
        }
        return this.excludeIssues(issues);
    }
    excludeIssues(issues) {
        const ret = issues;
        // exclude issues, as now we know both the filename and issue key
        // todo, add unit tests for this feature
        for (const rule of artifacts_1.Artifacts.getRules()) {
            const key = rule.getKey();
            const exclude = this.conf.readByKey(key, "exclude");
            if (exclude === undefined || exclude.length === 0) {
                continue;
            }
            for (let i = issues.length - 1; i >= 0; i--) {
                if (issues[i].getKey() !== key) {
                    continue;
                }
                let remove = false;
                for (const excl of exclude) {
                    if (new RegExp(excl).exec(ret[i].getFile().getFilename())) {
                        remove = true;
                        break;
                    }
                }
                if (!remove) {
                    ret.splice(i, 1);
                }
            }
        }
        return ret;
    }
    parse(progress) {
        if (!this.isDirty()) {
            return this;
        }
        const pro = progress ? progress : new NoProgress();
        const objects = this.getABAPObjects();
        pro.set(objects.length, ":percent - :elapseds - Lexing and parsing(" + version_1.versionToText(this.conf.getVersion()) + ") - :object");
        objects.forEach((obj) => {
            pro.tick({ object: obj.getType() + " " + obj.getName() });
            obj.parseFirstPass(this.conf.getVersion(), this);
        });
        pro.set(objects.length, ":percent - :elapseds - Second pass - :object");
        objects.forEach((obj) => {
            pro.tick({ object: obj.getType() + " " + obj.getName() });
            this.issues = this.issues.concat(obj.parseSecondPass(this));
        });
        this.dirty = false;
        return this;
    }
    addMacro(name) {
        // todo, handle scoping for macros
        if (this.isMacro(name)) {
            return;
        }
        this.macros.push(name.toUpperCase());
    }
    isMacro(name) {
        for (const mac of this.macros) {
            if (mac === name.toUpperCase()) {
                return true;
            }
        }
        return false;
    }
    findOrCreate(name, type) {
        try {
            return this.find(name, type);
        }
        catch (_a) {
            const add = artifacts_1.Artifacts.newObject(name, type);
            this.objects.push(add);
            return add;
        }
    }
    removeObject(remove) {
        if (remove === undefined) {
            return;
        }
        for (let i = 0; i < this.objects.length; i++) {
            if (this.objects[i] === remove) {
                this.objects.splice(i, 1);
                return;
            }
        }
        throw new Error("removeObject: object not found");
    }
    find(name, type) {
        for (const obj of this.objects) { // todo, this is slow
            if (obj.getType() === type && obj.getName() === name) {
                return obj;
            }
        }
        throw new Error("find: object not found");
    }
}
exports.Registry = Registry;
