"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const _abap_rule_1 = require("./_abap_rule");
const structures_1 = require("../abap/structures");
const _basic_rule_config_1 = require("./_basic_rule_config");
class TryWithoutCatchConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.TryWithoutCatchConf = TryWithoutCatchConf;
class TryWithoutCatch extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new TryWithoutCatchConf();
    }
    getKey() {
        return "try_without_catch";
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
    runParsed(file, _reg) {
        const issues = [];
        const stru = file.getStructure();
        if (stru === undefined) {
            return [];
        }
        const tries = stru.findAllStructures(structures_1.Try);
        for (const t of tries) {
            const c = t.findFirstStructure(structures_1.Catch);
            if (c === undefined) {
                issues.push(new issue_1.Issue({
                    file,
                    message: this.getDescription(),
                    key: this.getKey(),
                    start: t.getFirstToken().getPos()
                }));
            }
        }
        return issues;
    }
}
exports.TryWithoutCatch = TryWithoutCatch;
