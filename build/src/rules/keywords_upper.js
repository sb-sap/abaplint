"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const _abap_rule_1 = require("./_abap_rule");
const nodes_1 = require("../abap/nodes");
const _statement_1 = require("../abap/statements/_statement");
const tokens_1 = require("../abap/tokens");
const objects_1 = require("../objects");
const _basic_rule_config_1 = require("./_basic_rule_config");
class KeywordsUpperConf extends _basic_rule_config_1.BasicRuleConfig {
    constructor() {
        super(...arguments);
        this.ignoreExceptions = true;
    }
}
exports.KeywordsUpperConf = KeywordsUpperConf;
class KeywordsUpper extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new KeywordsUpperConf();
    }
    getKey() {
        return "keywords_upper";
    }
    getDescription() {
        return "Keywords upper case";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file, _reg, obj) {
        const issues = [];
        if (this.conf.ignoreExceptions && obj instanceof objects_1.Class) {
            const definition = obj.getClassDefinition();
            if (definition === undefined || definition.isException()) {
                return [];
            }
        }
        for (const statement of file.getStatements()) {
            if (statement.get() instanceof _statement_1.Unknown
                || statement.get() instanceof _statement_1.MacroContent
                || statement.get() instanceof _statement_1.MacroCall
                || statement.get() instanceof _statement_1.Comment) {
                continue;
            }
            const position = this.traverse(statement);
            if (position) {
                const issue = new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: position });
                issues.push(issue);
                break; // one finding per file
            }
        }
        return issues;
    }
    traverse(s) {
        for (const child of s.getChildren()) {
            if (child instanceof nodes_1.TokenNodeRegex) {
                continue;
            }
            else if (child instanceof nodes_1.TokenNode) {
                const str = child.get().getStr();
                if (str !== str.toUpperCase() && child.get() instanceof tokens_1.Identifier) {
                    return child.get().getPos();
                }
            }
            else if (child instanceof nodes_1.ExpressionNode) {
                const pos = this.traverse(child);
                if (pos) {
                    return pos;
                }
            }
            else {
                throw new Error("traverseStatement, unexpected node type");
            }
        }
        return undefined;
    }
}
exports.KeywordsUpper = KeywordsUpper;
