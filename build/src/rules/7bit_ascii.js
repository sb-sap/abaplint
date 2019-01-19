"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const position_1 = require("../position");
const _abap_rule_1 = require("./_abap_rule");
const _basic_rule_config_1 = require("./_basic_rule_config");
class SevenBitAsciiConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.SevenBitAsciiConf = SevenBitAsciiConf;
class SevenBitAscii extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new SevenBitAsciiConf();
    }
    getKey() {
        return "7bit_ascii";
    }
    getDescription() {
        return "Contains non 7 bit ascii character";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file) {
        const output = [];
        const rows = file.getRawRows();
        for (let i = 0; i < rows.length; i++) {
            if (/^[\u0000-\u007f]*$/.test(rows[i]) === false) {
                const issue = new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: new position_1.Position(i + 1, 1) });
                output.push(issue);
            }
        }
        return output;
    }
}
exports.SevenBitAscii = SevenBitAscii;
