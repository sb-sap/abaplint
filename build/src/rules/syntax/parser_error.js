"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../../issue");
const position_1 = require("../../position");
const Tokens = require("../../abap/tokens");
const _statement_1 = require("../../abap/statements/_statement");
const _abap_rule_1 = require("../_abap_rule");
const version_1 = require("../../version");
const _basic_rule_config_1 = require("../_basic_rule_config");
class ParserErrorConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.ParserErrorConf = ParserErrorConf;
class ParserError extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new ParserErrorConf();
    }
    getKey() {
        return "parser_error";
    }
    getDescription() {
        return "Parser error(Unknown statement)";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file, reg) {
        const issues = [];
        let start = new position_1.Position(0, 0);
        for (const statement of file.getStatements()) {
            // only report one error per row
            if (statement.get() instanceof _statement_1.Unknown
                && start.getRow() !== statement.getStart().getRow()) {
                const message = this.missingSpace(statement) ?
                    "Missing space between string or character literal and parentheses, Parser error" :
                    this.getDescription() + ", ABAP version " + version_1.versionToText(reg.getConfig().getVersion());
                start = statement.getStart();
                const issue = new issue_1.Issue({ file, message, key: this.getKey(), start });
                issues.push(issue);
            }
        }
        return issues;
    }
    missingSpace(statement) {
        const tokens = statement.getTokens();
        for (let i = 0; i < tokens.length - 1; i++) {
            const current = tokens[i];
            const next = tokens[i + 1];
            if (current.getRow() === next.getRow() &&
                current.getCol() + current.getStr().length === next.getCol() &&
                (current instanceof Tokens.String && next.getStr() === ")"
                    || current.getStr() === "(" && next instanceof Tokens.String)) {
                return true;
            }
        }
        return false;
    }
}
exports.ParserError = ParserError;
