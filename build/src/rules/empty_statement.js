"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const _statement_1 = require("../abap/statements/_statement");
const _abap_rule_1 = require("./_abap_rule");
const _basic_rule_config_1 = require("./_basic_rule_config");
class EmptyStatementConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.EmptyStatementConf = EmptyStatementConf;
class EmptyStatement extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new EmptyStatementConf();
    }
    getKey() {
        return "empty_statement";
    }
    getDescription() {
        return "Empty statement";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file) {
        const issues = [];
        const statements = file.getStatements();
        for (const sta of statements) {
            if (sta.get() instanceof _statement_1.Empty) {
                const issue = new issue_1.Issue({ file, key: this.getKey(), message: this.getDescription(), start: sta.getStart() });
                issues.push(issue);
            }
        }
        return issues;
    }
}
exports.EmptyStatement = EmptyStatement;
