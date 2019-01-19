"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const Statements = require("../abap/statements/");
const _abap_rule_1 = require("./_abap_rule");
const _basic_rule_config_1 = require("./_basic_rule_config");
class ExitOrCheckConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.ExitOrCheckConf = ExitOrCheckConf;
class ExitOrCheck extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new ExitOrCheckConf();
    }
    getKey() {
        return "exit_or_check";
    }
    getDescription() {
        return "EXIT or CHECK outside of loop";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file) {
        const issues = [];
        const stack = [];
        for (const statement of file.getStatements()) {
            if (statement.get() instanceof Statements.Loop
                || statement.get() instanceof Statements.While
                || statement.get() instanceof Statements.SelectLoop
                || statement.get() instanceof Statements.Do) {
                stack.push(statement);
            }
            else if (statement.get() instanceof Statements.EndLoop
                || statement.get() instanceof Statements.EndWhile
                || statement.get() instanceof Statements.EndSelect
                || statement.get() instanceof Statements.EndDo) {
                stack.pop();
            }
            else if ((statement.get() instanceof Statements.Check
                || statement.get() instanceof Statements.Exit)
                && stack.length === 0) {
                const issue = new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: statement.getStart() });
                issues.push(issue);
            }
        }
        return issues;
    }
}
exports.ExitOrCheck = ExitOrCheck;
