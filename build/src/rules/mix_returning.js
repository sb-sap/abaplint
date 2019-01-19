"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const _abap_rule_1 = require("./_abap_rule");
const Statements = require("../abap/statements");
const Expressions = require("../abap/expressions");
const _basic_rule_config_1 = require("./_basic_rule_config");
class MixReturningConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.MixReturningConf = MixReturningConf;
class MixReturning extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new MixReturningConf();
    }
    getKey() {
        return "mix_returning";
    }
    getDescription() {
        return "Mixing RETURNING and EXPORTING/CHANGING";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file) {
        const ret = [];
        const stru = file.getStructure();
        if (stru == undefined) {
            return [];
        }
        for (const def of stru.findAllStatements(Statements.MethodDef)) {
            if (!def.findFirstExpression(Expressions.MethodDefReturning)) {
                continue;
            }
            if (def.findFirstExpression(Expressions.MethodDefExporting)
                || def.findFirstExpression(Expressions.MethodDefChanging)) {
                const token = def.getFirstToken();
                ret.push(new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: token.getPos() }));
            }
        }
        return ret;
    }
}
exports.MixReturning = MixReturning;
