"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const _statement_1 = require("../abap/statements/_statement");
const Statements = require("../abap/statements/");
const _abap_rule_1 = require("./_abap_rule");
const _basic_rule_config_1 = require("./_basic_rule_config");
class DefinitionsTopConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.DefinitionsTopConf = DefinitionsTopConf;
// todo, use enum instead?
const ANY = 1;
const DEFINITION = 2;
const AFTER = 3;
const IGNORE = 4;
class DefinitionsTop extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new DefinitionsTopConf();
    }
    getKey() {
        return "definitions_top";
    }
    getDescription() {
        return "Reorder definitions to top of routine";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file) {
        const issues = [];
        let mode = ANY;
        let issue = undefined;
        // todo, this needs refactoring when the paser has become better
        for (const statement of file.getStatements()) {
            if (statement.get() instanceof Statements.Form
                || statement.get() instanceof Statements.Method) {
                mode = DEFINITION;
                issue = undefined;
            }
            else if (statement.get() instanceof _statement_1.Comment) {
                continue;
            }
            else if (statement.get() instanceof Statements.EndForm
                || statement.get() instanceof Statements.EndMethod) {
                mode = ANY;
                if (issue !== undefined) {
                    issues.push(issue);
                    issue = undefined;
                }
            }
            else if (statement.get() instanceof Statements.Data
                || statement.get() instanceof Statements.DataBegin
                || statement.get() instanceof Statements.DataEnd
                || statement.get() instanceof Statements.Type
                || statement.get() instanceof Statements.TypeBegin
                || statement.get() instanceof Statements.TypeEnd
                || statement.get() instanceof Statements.Constant
                || statement.get() instanceof Statements.ConstantBegin
                || statement.get() instanceof Statements.ConstantEnd
                || statement.get() instanceof Statements.Include
                || statement.get() instanceof Statements.IncludeType
                || statement.get() instanceof Statements.Static
                || statement.get() instanceof Statements.StaticBegin
                || statement.get() instanceof Statements.StaticEnd
                || statement.get() instanceof Statements.FieldSymbol) {
                if (mode === AFTER) {
                    issue = new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: statement.getStart() });
                    mode = ANY;
                }
            }
            else if (statement.get() instanceof Statements.Define) {
                // todo, currently macros will skip checking of the routine
                mode = IGNORE;
            }
            else if (mode === DEFINITION) {
                mode = AFTER;
            }
        }
        return issues;
    }
}
exports.DefinitionsTop = DefinitionsTop;
