"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const position_1 = require("../position");
const _abap_rule_1 = require("./_abap_rule");
const _basic_rule_config_1 = require("./_basic_rule_config");
class LineLengthConf extends _basic_rule_config_1.BasicRuleConfig {
    constructor() {
        super(...arguments);
        this.length = 120;
    }
}
exports.LineLengthConf = LineLengthConf;
class LineLength extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new LineLengthConf();
    }
    getKey() {
        return "line_length";
    }
    getDescription() {
        return "Reduce line length";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file) {
        const issues = [];
        const lines = file.getRaw().split("\n");
        for (let line = 0; line < lines.length; line++) {
            if (lines[line].length > this.conf.length) {
                const issue = new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: new position_1.Position(line + 1, 1) });
                issues.push(issue);
            }
        }
        return issues;
    }
}
exports.LineLength = LineLength;
