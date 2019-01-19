"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const objects_1 = require("../objects");
const _basic_rule_config_1 = require("./_basic_rule_config");
class ClassAttributeNamesConf extends _basic_rule_config_1.BasicRuleConfig {
    constructor() {
        super(...arguments);
        this.ignoreExceptions = true;
        this.statics = "^G._.*$";
        this.instance = "^M._.*$";
    }
}
exports.ClassAttributeNamesConf = ClassAttributeNamesConf;
class ClassAttributeNames {
    constructor() {
        this.conf = new ClassAttributeNamesConf();
    }
    getKey() {
        return "class_attribute_names";
    }
    getDescription() {
        return "Class Attribute Names";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    run(obj, _reg) {
        let attr = undefined;
        // todo, consider local classes(PROG, FUGR, CLAS)
        if (obj instanceof objects_1.Class) {
            const definition = obj.getClassDefinition();
            if (definition === undefined) {
                return [];
            }
            if (this.conf.ignoreExceptions && definition.isException()) {
                return [];
            }
            if (definition.getAttributes() === undefined) {
                return [];
            }
            attr = definition.getAttributes();
            // todo, INTF
            //    } else if (obj instanceof Interface) {
            //      methods = obj();
        }
        return this.checkAttributes(attr, obj);
    }
    checkAttributes(attr, obj) {
        if (!attr) {
            return [];
        }
        let ret = [];
        for (const ins of attr.getInstance()) {
            ret = ret.concat(this.checkName(ins, this.conf.instance, obj));
        }
        for (const sta of attr.getStatic()) {
            ret = ret.concat(this.checkName(sta, this.conf.statics, obj));
        }
        return ret;
    }
    checkName(attr, expected, obj) {
        const ret = [];
        const regex = new RegExp(expected, "i");
        const name = attr.getName();
        if (regex.test(name) === false) {
            const message = "Bad attribute name \"" + name + "\" expected \"" + expected + "/i\"";
            // todo, find the right file
            const issue = new issue_1.Issue({ file: obj.getFiles()[0], message, key: this.getKey(), start: attr.getPosition() });
            ret.push(issue);
        }
        return ret;
    }
}
exports.ClassAttributeNames = ClassAttributeNames;
