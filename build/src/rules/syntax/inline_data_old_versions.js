"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../../issue");
const _abap_rule_1 = require("../_abap_rule");
const version_1 = require("../../version");
const expressions_1 = require("../../abap/expressions");
const _basic_rule_config_1 = require("../_basic_rule_config");
class InlineDataOldVersionsConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.InlineDataOldVersionsConf = InlineDataOldVersionsConf;
class InlineDataOldVersions extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new InlineDataOldVersionsConf();
    }
    getKey() {
        return "inline_data_old_versions";
    }
    getDescription() {
        return "Inline DATA in old versions";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file, reg) {
        const issues = [];
        if (reg.getConfig().getVersion() >= version_1.Version.v740sp02) {
            return [];
        }
        for (const statement of file.getStatements()) {
            // when parsed in old versions these expressions are NOT InlineData
            for (const target of statement.findAllExpressions(expressions_1.Target)) {
                const tokens = target.getAllTokens();
                if (tokens.length !== 4) {
                    continue;
                }
                if (!tokens[0].getStr().match(/DATA/i)) {
                    continue;
                }
                if (tokens[1].getStr() !== "(") {
                    continue;
                }
                if (tokens[3].getStr() !== ")") {
                    continue;
                }
                const message = "Inline DATA not possible in " + version_1.versionToText(reg.getConfig().getVersion());
                issues.push(new issue_1.Issue({ file, message, key: this.getKey(), start: tokens[0].getPos() }));
            }
        }
        return issues;
    }
}
exports.InlineDataOldVersions = InlineDataOldVersions;
