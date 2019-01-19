"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const Statements = require("../abap/statements");
const _abap_rule_1 = require("./_abap_rule");
const _basic_rule_config_1 = require("./_basic_rule_config");
class BreakpointConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.BreakpointConf = BreakpointConf;
class Breakpoint extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new BreakpointConf();
    }
    getKey() {
        return "breakpoint";
    }
    getDescription() {
        return "Contains breakpoint";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file) {
        const issues = [];
        for (const statement of file.getStatements()) {
            if (statement.get() instanceof Statements.Break) {
                issues.push(new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: statement.getStart() }));
            }
        }
        return issues;
    }
}
exports.Breakpoint = Breakpoint;
