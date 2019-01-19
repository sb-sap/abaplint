"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../../issue");
const position_1 = require("../../position");
const _abap_rule_1 = require("../_abap_rule");
const _basic_rule_config_1 = require("../_basic_rule_config");
class SequentialBlankConf extends _basic_rule_config_1.BasicRuleConfig {
    constructor() {
        super(...arguments);
        this.lines = 4;
    }
}
exports.SequentialBlankConf = SequentialBlankConf;
class SequentialBlank extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new SequentialBlankConf();
    }
    getKey() {
        return "sequential_blank";
    }
    getDescription() {
        return "Sequential blank lines";
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
        let blanks = 0;
        for (let i = 0; i < rows.length; i++) {
            if (rows[i] === "") {
                blanks++;
            }
            else {
                blanks = 0;
            }
            if (blanks === this.conf.lines) {
                const issue = new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: new position_1.Position(i + 1, 1) });
                issues.push(issue);
            }
        }
        return issues;
    }
}
exports.SequentialBlank = SequentialBlank;
