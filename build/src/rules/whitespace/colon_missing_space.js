"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../../issue");
const _abap_rule_1 = require("../_abap_rule");
const _basic_rule_config_1 = require("../_basic_rule_config");
class ColonMissingSpaceConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.ColonMissingSpaceConf = ColonMissingSpaceConf;
class ColonMissingSpace extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new ColonMissingSpaceConf();
    }
    getKey() {
        return "colon_missing_space";
    }
    getDescription() {
        return "Missing space after colon";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file) {
        const issues = [];
        const tokens = file.getTokens();
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            if (token.getStr() === ":"
                && tokens[i + 1] !== undefined
                && tokens[i + 1].getRow() === token.getRow()
                && tokens[i + 1].getCol() === token.getCol() + 1) {
                const issue = new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: token.getPos() });
                issues.push(issue);
            }
        }
        return issues;
    }
}
exports.ColonMissingSpace = ColonMissingSpace;
