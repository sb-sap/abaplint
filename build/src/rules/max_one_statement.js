"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const _statement_1 = require("../abap/statements/_statement");
const _abap_rule_1 = require("./_abap_rule");
const _basic_rule_config_1 = require("./_basic_rule_config");
class MaxOneStatementConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.MaxOneStatementConf = MaxOneStatementConf;
class MaxOneStatement extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new MaxOneStatementConf();
    }
    getKey() {
        return "max_one_statement";
    }
    getDescription() {
        return "Max one statement per line";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file) {
        const issues = [];
        let prev = 0;
        let reported = 0;
        for (const statement of file.getStatements()) {
            const term = statement.getTerminator();
            if (statement.get() instanceof _statement_1.Comment || term === ",") {
                continue;
            }
            const pos = statement.getStart();
            const row = pos.getRow();
            if (prev === row && row !== reported) {
                const issue = new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: pos });
                issues.push(issue);
                reported = row;
            }
            prev = row;
        }
        return issues;
    }
}
exports.MaxOneStatement = MaxOneStatement;
