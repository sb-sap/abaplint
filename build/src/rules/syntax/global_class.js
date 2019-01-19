"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../../issue");
const _abap_rule_1 = require("./../_abap_rule");
const Objects = require("../../objects");
const _basic_rule_config_1 = require("../_basic_rule_config");
class GlobalClassConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.GlobalClassConf = GlobalClassConf;
class GlobalClass extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new GlobalClassConf();
    }
    getKey() {
        return "global_class";
    }
    getDescription() {
        return "Global class naming";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file, _reg, obj) {
        const output = [];
        for (const definition of file.getClassDefinitions()) {
            if (definition.isLocal() && obj instanceof Objects.Class && file.getFilename().match(/\.clas\.abap$/)) {
                const issue = new issue_1.Issue({ file, message: "Global classes must be global", key: this.getKey(), start: definition.getPosition() });
                output.push(issue);
            }
            if (definition.isGlobal() && obj instanceof Objects.Class && definition.getName().toUpperCase() !== obj.getName().toUpperCase()) {
                const issue = new issue_1.Issue({ file, message: "Class name must match filename", key: this.getKey(), start: definition.getPosition() });
                output.push(issue);
            }
            if (definition.isGlobal() && !(obj instanceof Objects.Class)) {
                const issue = new issue_1.Issue({ file, message: "Class must be local", key: this.getKey(), start: definition.getPosition() });
                output.push(issue);
            }
        }
        for (const impl of file.getClassImplementations()) {
            if (file.getFilename().match(/\.clas\.abap$/)
                && obj instanceof Objects.Class
                && impl.getName().toUpperCase() !== obj.getName().toUpperCase()) {
                const issue = new issue_1.Issue({ file, message: "Class name must match filename", key: this.getKey(), start: impl.getPosition() });
                output.push(issue);
            }
        }
        return output;
    }
}
exports.GlobalClass = GlobalClass;
