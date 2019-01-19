"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../../issue");
const position_1 = require("../../position");
const _abap_rule_1 = require("../_abap_rule");
const _basic_rule_config_1 = require("../_basic_rule_config");
class WhitespaceEndConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.WhitespaceEndConf = WhitespaceEndConf;
class WhitespaceEnd extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new WhitespaceEndConf();
    }
    getKey() {
        return "whitespace_end";
    }
    getDescription() {
        return "Whitespace at end of line";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file) {
        const issues = [];
        const rows = file.getRawRows();
        for (let i = 0; i < rows.length; i++) {
            if (/.* $/.test(rows[i]) === true) {
                const issue = new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: new position_1.Position(i + 1, 1) });
                issues.push(issue);
            }
        }
        return issues;
    }
}
exports.WhitespaceEnd = WhitespaceEnd;
