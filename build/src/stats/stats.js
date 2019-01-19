"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registry_1 = require("../registry");
const version_1 = require("../version");
const _statement_1 = require("../abap/statements/_statement");
const Statements = require("../abap/statements");
const method_length_stats_1 = require("./method_length_stats");
const statement_types_stats_1 = require("./statement_types_stats");
class Stats {
    constructor(reg) {
        this.reg = reg;
    }
    run(progress) {
        return {
            version: registry_1.Registry.abaplintVersion(),
            target: version_1.versionToText(this.reg.getConfig().getVersion()),
            time: new Date().toISOString(),
            totals: this.buildTotals(),
            objects: this.sort(this.buildObjects()),
            issues: this.sort(this.buildIssues()),
            objectOrientation: this.buildObjectOrientation(),
            methodLength: this.buildMethodLength(),
            statementTypes: this.sort(statement_types_stats_1.StatementTypesStats.run(this.reg)),
            statements: this.buildStatements(progress),
        };
    }
    // ////////////////////////////////////////////////
    sort(input) {
        return input.sort((a, b) => { return a.type.localeCompare(b.type); });
    }
    buildMethodLength() {
        const ret = [];
        for (const obj of this.reg.getObjects()) {
            const stats = method_length_stats_1.MethodLengthStats.run(obj);
            for (const s of stats) {
                // add to output, todo, this is really slow
                for (let i = 0; i <= s.count; i++) {
                    if (ret[i] === undefined) {
                        ret.push(0);
                    }
                }
                ret[s.count] = ret[s.count] + 1;
            }
        }
        return ret;
    }
    buildObjectOrientation() {
        const res = { oo: 0, non: 0 };
        let oo = false;
        for (const file of this.reg.getABAPFiles()) {
            for (const stat of file.getStatements()) {
                const type = stat.get();
                if (type instanceof _statement_1.Comment
                    || type instanceof _statement_1.Empty) {
                    continue;
                }
                else if (type instanceof Statements.ClassDefinition
                    || type instanceof Statements.ClassImplementation
                    || type instanceof Statements.Interface) {
                    oo = true;
                    res.oo = res.oo + 1;
                }
                else if (type instanceof Statements.EndClass
                    || type instanceof Statements.EndInterface) {
                    oo = false;
                    res.oo = res.oo + 1;
                }
                else if (type instanceof Statements.ClassDefinitionLoad
                    || type instanceof Statements.ClassOther
                    || type instanceof Statements.InterfaceDeferred) {
                    res.oo = res.oo + 1;
                }
                else if (oo) {
                    res.oo = res.oo + 1;
                }
                else {
                    res.non = res.non + 1;
                }
            }
        }
        return res;
    }
    buildStatements(progress) {
        const ret = [];
        for (const ver in version_1.Version) {
            if (isNaN(Number(ver))) {
                ret.push({ type: ver, count: this.statementsVersion(version_1.textToVersion(ver), progress) });
            }
        }
        return ret;
    }
    statementsVersion(ver, progress) {
        let result = 0;
        this.reg.setConfig(this.reg.getConfig().setVersion(ver));
        this.reg.parse(progress);
        for (const file of this.reg.getABAPFiles()) {
            for (const stat of file.getStatements()) {
                if (!(stat.get() instanceof _statement_1.Unknown)) {
                    result = result + 1;
                }
            }
        }
        return result;
    }
    buildIssues() {
        const res = [];
        for (const issue of this.reg.findIssues()) {
            let found = false;
            for (const r of res) {
                if (r.type === issue.getKey()) {
                    r.count = r.count + 1;
                    found = true;
                }
            }
            if (found === false) {
                res.push({ type: issue.getKey(), count: 1 });
            }
        }
        return res;
    }
    buildObjects() {
        const res = [];
        for (const obj of this.reg.getObjects()) {
            let found = false;
            for (const r of res) {
                if (r.type === obj.getType()) {
                    r.count = r.count + 1;
                    found = true;
                }
            }
            if (found === false) {
                res.push({ type: obj.getType(), count: 1 });
            }
        }
        return res;
    }
    buildTotals() {
        return {
            objects: this.reg.getObjects().length,
            files: this.countFiles(),
            statements: this.countStatements(),
            tokens: this.countTokens(),
        };
    }
    countStatements() {
        let result = 0;
        for (const file of this.reg.getABAPFiles()) {
            result = result + file.getStatements().length;
        }
        return result;
    }
    countTokens() {
        let result = 0;
        for (const file of this.reg.getABAPFiles()) {
            result = result + file.getTokens().length;
        }
        return result;
    }
    countFiles() {
        let result = 0;
        for (const obj of this.reg.getObjects()) {
            result = result + obj.getFiles().length;
        }
        return result;
    }
}
exports.Stats = Stats;
