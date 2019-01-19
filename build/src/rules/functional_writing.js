"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const _abap_rule_1 = require("./_abap_rule");
const Statements = require("../abap/statements");
const _basic_rule_config_1 = require("./_basic_rule_config");
class FunctionalWritingConf extends _basic_rule_config_1.BasicRuleConfig {
    constructor() {
        super(...arguments);
        this.ignoreExceptions = true;
    }
}
exports.FunctionalWritingConf = FunctionalWritingConf;
class FunctionalWriting extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new FunctionalWritingConf();
    }
    getKey() {
        return "functional_writing";
    }
    getDescription() {
        return "Use functional writing style";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file) {
        const issues = [];
        let exception = false;
        for (const statement of file.getStatements()) {
            const code = statement.concatTokens().toUpperCase();
            if (statement.get() instanceof Statements.ClassImplementation && code.match(/^CLASS .?CX/i) && this.conf.ignoreExceptions) {
                exception = true;
            }
            else if (statement.get() instanceof Statements.EndClass) {
                exception = false;
            }
            else if (exception === false && this.startsWith(code, "CALL METHOD ")) {
                if (/\)[=-]>/.test(code) === true
                    || /[=-]>\(/.test(code) === true
                    || this.startsWith(code, "CALL METHOD (")) {
                    continue;
                }
                const issue = new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: statement.getStart() });
                issues.push(issue);
            }
        }
        return issues;
    }
    startsWith(str, value) {
        return str.substr(0, value.length) === value;
    }
}
exports.FunctionalWriting = FunctionalWriting;
