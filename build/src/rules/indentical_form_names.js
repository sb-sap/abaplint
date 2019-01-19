"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const _basic_rule_config_1 = require("./_basic_rule_config");
const _abap_object_1 = require("../objects/_abap_object");
class IdenticalFormNamesConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.IdenticalFormNamesConf = IdenticalFormNamesConf;
class IdenticalFormNames {
    constructor() {
        this.conf = new IdenticalFormNamesConf();
    }
    getKey() {
        return "identical_form_names";
    }
    getDescription() {
        return "Identical FORM Names";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    run(obj, _reg) {
        if (!(obj instanceof _abap_object_1.ABAPObject)) {
            return [];
        }
        const ret = [];
        const found = [];
        for (const file of obj.getABAPFiles()) {
            for (const form of file.getFormDefinitions()) {
                const name = form.getName().toUpperCase();
                if (found.indexOf(name) >= 0) {
                    const message = this.getDescription() + " \"" + name + "\"";
                    ret.push(new issue_1.Issue({ file, message, key: this.getKey(), start: form.getPosition() }));
                }
                else {
                    found.push(name);
                }
            }
        }
        return ret;
    }
}
exports.IdenticalFormNames = IdenticalFormNames;
