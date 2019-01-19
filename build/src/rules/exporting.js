"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const _abap_rule_1 = require("./_abap_rule");
const _basic_rule_config_1 = require("./_basic_rule_config");
class Counter {
    constructor() {
        this.exporting = false;
        this.other = false;
    }
}
exports.Counter = Counter;
class ExportingConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.ExportingConf = ExportingConf;
class Exporting extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new ExportingConf();
    }
    getKey() {
        return "exporting";
    }
    getDescription() {
        return "EXPORTING can be omitted";
    }
    runParsed(file) {
        const issues = [];
        for (const statement of file.getStatements()) {
            let current = new Counter();
            const stack = [];
            for (const token of statement.getTokens()) {
                if (this.lastChar(token.getStr()) === "(") {
                    stack.push(current);
                    current = new Counter();
                }
                else if (this.firstChar(token.getStr()) === ")") {
                    if (current.exporting === true && current.other === false) {
                        const issue = new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: current.pos });
                        issues.push(issue);
                    }
                    current = stack.pop();
                    if (current === undefined) {
                        current = new Counter();
                    }
                }
                else if (token.getStr() === "EXPORTING") {
                    current.exporting = true;
                    current.pos = token.getPos();
                }
                else if (token.getStr() === "IMPORTING"
                    || token.getStr() === "RECEIVING"
                    || token.getStr() === "EXCEPTIONS"
                    || token.getStr() === "CHANGING") {
                    current.other = true;
                }
            }
        }
        return issues;
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    lastChar(s) {
        return s.charAt(s.length - 1);
    }
    firstChar(s) {
        return s.charAt(0);
    }
}
exports.Exporting = Exporting;
