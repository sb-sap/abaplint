"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_variables_1 = require("../../abap/syntax/check_variables");
const _basic_rule_config_1 = require("../_basic_rule_config");
const _abap_object_1 = require("../../objects/_abap_object");
class CheckVariablesConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.CheckVariablesConf = CheckVariablesConf;
class CheckVariables {
    constructor() {
        this.conf = new CheckVariablesConf();
    }
    getKey() {
        return "check_variables";
    }
    getDescription() {
        return "Check Variables";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    run(obj, reg) {
        if (!(obj instanceof _abap_object_1.ABAPObject)) {
            return [];
        }
        return new check_variables_1.CheckVariablesLogic(reg, obj).findIssues();
    }
}
exports.CheckVariables = CheckVariables;
