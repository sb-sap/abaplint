"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const position_1 = require("../position");
const _abap_rule_1 = require("./_abap_rule");
const _basic_rule_config_1 = require("./_basic_rule_config");
class LineOnlyPuncConf extends _basic_rule_config_1.BasicRuleConfig {
    constructor() {
        super(...arguments);
        this.ignoreExceptions = true;
    }
}
exports.LineOnlyPuncConf = LineOnlyPuncConf;
class LineOnlyPunc extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new LineOnlyPuncConf();
    }
    getKey() {
        return "line_only_punc";
    }
    getDescription() {
        return "Line contains only . or ).";
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
        const rows = file.getRawRows();
        for (let i = 0; i < rows.length; i++) {
            const trim = rows[i].trim();
            if (trim.match(/^CLASS .?CX/i) && this.conf.ignoreExceptions) {
                exception = true;
            }
            else if (trim.match(/^ENDCLASS/i)) {
                exception = false;
            }
            else if ((trim === "." || trim === ").") && exception === false) {
                const issue = new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: new position_1.Position(i + 1, 0) });
                issues.push(issue);
            }
        }
        return issues;
    }
}
exports.LineOnlyPunc = LineOnlyPunc;
