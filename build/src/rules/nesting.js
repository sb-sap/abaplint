"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const Statements = require("../abap/statements");
const _abap_rule_1 = require("./_abap_rule");
const _basic_rule_config_1 = require("./_basic_rule_config");
class NestingConf extends _basic_rule_config_1.BasicRuleConfig {
    constructor() {
        super(...arguments);
        this.depth = 5;
    }
}
exports.NestingConf = NestingConf;
class Nesting extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new NestingConf();
    }
    getKey() {
        return "nesting";
    }
    getDescription() {
        return "Deep nesting";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file) {
        const issues = [];
        let depth = 0;
        for (const statement of file.getStatements()) {
            const type = statement.get();
            if (type instanceof Statements.If
                || type instanceof Statements.Case
                || type instanceof Statements.While
                || type instanceof Statements.Loop
                || type instanceof Statements.SelectLoop
                || type instanceof Statements.Do
                || type instanceof Statements.Try) {
                depth = depth + 1;
            }
            else if (type instanceof Statements.EndIf
                || type instanceof Statements.EndCase
                || type instanceof Statements.EndWhile
                || type instanceof Statements.EndLoop
                || type instanceof Statements.EndSelect
                || type instanceof Statements.EndDo
                || type instanceof Statements.EndTry) {
                depth = depth - 1;
            }
            if (depth > this.conf.depth) {
                const pos = statement.getFirstToken().getPos();
                const issue = new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: pos });
                issues.push(issue);
                break; // only one finding per file
            }
        }
        return issues;
    }
}
exports.Nesting = Nesting;
