"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../../issue");
const _statement_1 = require("../../abap/statements/_statement");
const statements_1 = require("../../abap/statements");
const _abap_rule_1 = require("../_abap_rule");
const _basic_rule_config_1 = require("../_basic_rule_config");
class StartAtTabConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.StartAtTabConf = StartAtTabConf;
class StartAtTab extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new StartAtTabConf();
    }
    getKey() {
        return "start_at_tab";
    }
    getDescription() {
        return "Start statement at tab position";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file) {
        const issues = [];
        let inType = false;
        let previous = undefined;
        for (const statement of file.getStatements()) {
            if (statement.get() instanceof _statement_1.Comment) {
                continue;
            }
            else if (statement.get() instanceof statements_1.TypeBegin) {
                inType = true;
            }
            else if (statement.get() instanceof statements_1.TypeEnd) {
                inType = false;
            }
            else if (inType) {
                continue;
            }
            const pos = statement.getStart();
            if (previous !== undefined && pos.getRow() === previous.getRow()) {
                continue;
            }
            if ((pos.getCol() - 1) % 2 !== 0) {
                const issue = new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: pos });
                issues.push(issue);
            }
            previous = pos;
        }
        return issues;
    }
}
exports.StartAtTab = StartAtTab;
