"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const Statements = require("../abap/statements/");
const _abap_rule_1 = require("./_abap_rule");
const expressions_1 = require("../abap/expressions");
const _basic_rule_config_1 = require("./_basic_rule_config");
class ObsoleteStatementConf extends _basic_rule_config_1.BasicRuleConfig {
    constructor() {
        super(...arguments);
        this.refresh = true;
        this.compute = true;
        this.add = true;
        this.subtract = true;
        this.multiply = true;
        this.move = true;
        this.divide = true;
        this.requested = true;
    }
}
exports.ObsoleteStatementConf = ObsoleteStatementConf;
class ObsoleteStatement extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new ObsoleteStatementConf();
    }
    getKey() {
        return "obsolete_statement";
    }
    getDescription() {
        return "Statement is obsolete";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file) {
        const issues = [];
        const statements = file.getStatements();
        for (const sta of statements) {
            if ((sta.get() instanceof Statements.Refresh && this.conf.refresh)
                || (sta.get() instanceof Statements.Compute && this.conf.compute)
                || (sta.get() instanceof Statements.Add && this.conf.add)
                || (sta.get() instanceof Statements.Subtract && this.conf.subtract)
                || (sta.get() instanceof Statements.Multiply && this.conf.multiply)
                || (sta.get() instanceof Statements.Move && this.conf.move
                    && sta.getTokens()[0].getStr() === "MOVE"
                    && sta.getTokens()[1].getStr() !== "-"
                    && sta.getTokens()[1].getStr() !== "EXACT")
                || (sta.get() instanceof Statements.Divide && this.conf.divide)) {
                issues.push(new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: sta.getStart() }));
            }
            for (const compare of sta.findAllExpressions(expressions_1.Compare)) {
                const token = compare.findDirectTokenByText("REQUESTED");
                if (token) {
                    issues.push(new issue_1.Issue({ file, message: "IS REQUESTED is obsolete", key: this.getKey(), start: token.getPos() }));
                }
            }
        }
        return issues;
    }
}
exports.ObsoleteStatement = ObsoleteStatement;
