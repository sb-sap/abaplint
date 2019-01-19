"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const position_1 = require("../position");
const _abap_rule_1 = require("./_abap_rule");
const files_1 = require("../files");
const _basic_rule_config_1 = require("./_basic_rule_config");
const registry_1 = require("../registry");
const _statement_1 = require("../abap/statements/_statement");
class CommentedCodeConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.CommentedCodeConf = CommentedCodeConf;
class CommentedCode extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new CommentedCodeConf();
    }
    getKey() {
        return "commented_code";
    }
    getDescription() {
        return "Commented code";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file) {
        let output = [];
        const rows = file.getRawRows();
        let code = "";
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].substr(0, 1) === "*") {
                code = code + rows[i].substr(1) + "\n";
            }
            else if (code !== "") {
                output = output.concat(this.check(code, file, i - 1));
                code = "";
            }
        }
        output = output.concat(this.check(code, file, rows.length - 1));
        return output;
    }
    check(code, file, row) {
        if (code === "") {
            return [];
        }
        const reg = new registry_1.Registry().addFile(new files_1.MemoryFile("_foobar.prog.abap", code)).parse();
        const statements = reg.getABAPFiles()[0].getStatements();
        if (statements.length === 0) {
            return [];
        }
        for (const statement of statements) {
            const type = statement.get();
            if (type instanceof _statement_1.Unknown
                || type instanceof _statement_1.Empty
                || type instanceof _statement_1.Comment) {
                return [];
            }
        }
        return [new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: new position_1.Position(row + 1, 1) })];
    }
}
exports.CommentedCode = CommentedCode;
