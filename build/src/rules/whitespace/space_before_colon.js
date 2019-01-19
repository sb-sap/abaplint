"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../../issue");
const _abap_rule_1 = require("../_abap_rule");
const _basic_rule_config_1 = require("../_basic_rule_config");
class SpaceBeforeColonConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.SpaceBeforeColonConf = SpaceBeforeColonConf;
class SpaceBeforeColon extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new SpaceBeforeColonConf();
    }
    getKey() {
        return "space_before_colon";
    }
    getDescription() {
        return "Space before colon";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file) {
        const issues = [];
        let prev = file.getTokens()[0];
        for (const token of file.getTokens()) {
            if (token.getStr() === ":" && !prev) {
                const issue = new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: token.getPos() });
                issues.push(issue);
            }
            else if (token.getStr() === ":"
                && prev.getRow() === token.getRow()
                && prev.getCol() + prev.getStr().length < token.getCol()) {
                const issue = new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: token.getPos() });
                issues.push(issue);
            }
            prev = token;
        }
        return issues;
    }
}
exports.SpaceBeforeColon = SpaceBeforeColon;
