"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const _abap_rule_1 = require("./_abap_rule");
const statements_1 = require("../abap/statements");
const expressions_1 = require("../abap/expressions");
const objects_1 = require("../objects");
const _basic_rule_config_1 = require("./_basic_rule_config");
class LocalClassNamingConf extends _basic_rule_config_1.BasicRuleConfig {
    constructor() {
        super(...arguments);
        this.local = "^LCL_.*$";
        this.test = "^LTCL_.*$";
    }
}
exports.LocalClassNamingConf = LocalClassNamingConf;
class LocalClassNaming extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new LocalClassNamingConf();
    }
    getKey() {
        return "local_class_naming";
    }
    getDescription() {
        return "Local class naming";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file, _reg, obj) {
        const issues = [];
        const testRegex = new RegExp(this.conf.test, "i");
        const localRegex = new RegExp(this.conf.local, "i");
        for (const stat of file.getStatements()) {
            if (!(stat.get() instanceof statements_1.ClassDefinition)) {
                continue;
            }
            const expr = stat.findFirstExpression(expressions_1.ClassName);
            if (!expr) {
                continue;
            }
            const token = expr.getFirstToken();
            const name = token.getStr();
            if (obj instanceof objects_1.Class && name.toUpperCase() === obj.getName().toUpperCase()) {
                continue;
            }
            let expected = "";
            if (stat.concatTokens().includes("FOR TESTING")) {
                if (testRegex.test(name) === false) {
                    expected = this.conf.test;
                }
            }
            else {
                if (localRegex.test(name) === false) {
                    expected = this.conf.local;
                }
            }
            if (expected.length > 0) {
                const issue = new issue_1.Issue({
                    file,
                    message: this.getDescription() + ", expected " + expected,
                    key: this.getKey(),
                    start: token.getPos()
                });
                issues.push(issue);
            }
        }
        return issues;
    }
}
exports.LocalClassNaming = LocalClassNaming;
