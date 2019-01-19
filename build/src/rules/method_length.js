"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const method_length_stats_1 = require("../stats/method_length_stats");
const _basic_rule_config_1 = require("./_basic_rule_config");
class MethodLengthConf extends _basic_rule_config_1.BasicRuleConfig {
    constructor() {
        super(...arguments);
        this.statements = 100;
    }
}
exports.MethodLengthConf = MethodLengthConf;
class MethodLength {
    constructor() {
        this.conf = new MethodLengthConf();
    }
    getKey() {
        return "method_length";
    }
    getDescription() {
        return "Method length, number of statements";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    run(obj, _reg) {
        const issues = [];
        const stats = method_length_stats_1.MethodLengthStats.run(obj);
        for (const s of stats) {
            if (s.count > this.conf.statements) {
                const issue = new issue_1.Issue({
                    file: s.file,
                    message: "Reduce method length, " + s.count + " statements",
                    key: this.getKey(),
                    start: s.pos
                });
                issues.push(issue);
            }
        }
        return issues;
    }
}
exports.MethodLength = MethodLength;
