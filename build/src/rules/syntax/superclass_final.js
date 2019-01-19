"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../../issue");
const _abap_rule_1 = require("./../_abap_rule");
const Objects = require("../../objects");
const _basic_rule_config_1 = require("../_basic_rule_config");
class SuperclassFinalConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.SuperclassFinalConf = SuperclassFinalConf;
class SuperclassFinal extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new SuperclassFinalConf();
    }
    getKey() {
        return "superclass_final";
    }
    getDescription() {
        return "Superclasses cannot be FINAL";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file, reg, obj) {
        const output = [];
        for (const definition of file.getClassDefinitions()) {
            const sup = definition.getSuperClass();
            if (sup === undefined) {
                continue;
            }
            let localLookup = true;
            if (obj instanceof Objects.Class && file.getFilename().match(/\.clas\.abap$/)) {
                localLookup = false;
            }
            let found = undefined;
            if (localLookup) {
                // todo, this should look inside the object instead of the file?
                found = file.getClassDefinition(sup);
            }
            if (found === undefined) {
                const clas = reg.getObject("CLAS", sup);
                if (clas) {
                    found = clas.getClassDefinition();
                }
            }
            if (found === undefined) {
                const message = "Super class \"" + sup + "\" not found";
                const issue = new issue_1.Issue({ file, message, key: this.getKey(), start: definition.getPosition() });
                output.push(issue);
                continue;
            }
            if (found.isFinal()) {
                const issue = new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: definition.getPosition() });
                output.push(issue);
            }
        }
        return output;
    }
}
exports.SuperclassFinal = SuperclassFinal;
