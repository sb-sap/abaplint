"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const _abap_object_1 = require("../objects/_abap_object");
const _basic_rule_config_1 = require("./_basic_rule_config");
class MethodParameterNamesConf extends _basic_rule_config_1.BasicRuleConfig {
    constructor() {
        super(...arguments);
        this.ignoreExceptions = true;
        this.importing = "^I._.*$";
        this.returning = "^R._.*$";
        this.changing = "^C._.*$";
        this.exporting = "^E._.*$";
        this.ignoreNames = ["P_TASK"];
    }
}
exports.MethodParameterNamesConf = MethodParameterNamesConf;
class MethodParameterNames {
    constructor() {
        this.conf = new MethodParameterNamesConf();
    }
    getKey() {
        return "method_parameter_names";
    }
    getDescription() {
        return "Method Parameter Names";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    run(obj, _reg) {
        let ret = [];
        if (!(obj instanceof _abap_object_1.ABAPObject)) {
            return [];
        }
        for (const file of obj.getABAPFiles()) {
            for (const def of file.getInterfaceDefinitions()) {
                for (const method of def.getMethodDefinitions()) {
                    ret = ret.concat(this.checkMethod(method, file));
                }
            }
            for (const def of file.getClassDefinitions()) {
                if (this.conf.ignoreExceptions && def.isException()) {
                    continue;
                }
                const definitions = def.getMethodDefinitions();
                if (definitions === undefined) {
                    continue;
                }
                for (const method of definitions.getAll()) {
                    ret = ret.concat(this.checkMethod(method, file));
                }
            }
        }
        return ret;
    }
    checkMethod(method, file) {
        let ret = [];
        const parameters = method.getParameters();
        for (const param of parameters.getImporting()) {
            ret = ret.concat(this.checkParameter(param, this.conf.importing, file));
        }
        for (const param of parameters.getExporting()) {
            ret = ret.concat(this.checkParameter(param, this.conf.exporting, file));
        }
        for (const param of parameters.getChanging()) {
            ret = ret.concat(this.checkParameter(param, this.conf.changing, file));
        }
        const returning = parameters.getReturning();
        if (returning) {
            ret = ret.concat(this.checkParameter(returning, this.conf.returning, file));
        }
        return ret;
    }
    checkParameter(param, expected, file) {
        const ret = [];
        const regex = new RegExp(expected, "i");
        const name = param.getName();
        if (regex.test(name) === false) {
            if (!this.conf.ignoreNames) {
                throw new Error("update abaplint.json to latest format");
            }
            if (this.conf.ignoreNames.indexOf(name.toUpperCase()) >= 0) {
                return ret;
            }
            const message = "Bad method parameter name \"" + name + "\" expected \"" + expected + "/i\"";
            // todo, find the right file
            const issue = new issue_1.Issue({ file, message, key: this.getKey(), start: param.getPosition() });
            ret.push(issue);
        }
        return ret;
    }
}
exports.MethodParameterNames = MethodParameterNames;
