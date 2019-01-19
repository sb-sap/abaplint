"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const _abap_rule_1 = require("./_abap_rule");
const Structures = require("../abap/structures");
const Statements = require("../abap/statements");
const Expressions = require("../abap/expressions");
const _basic_rule_config_1 = require("./_basic_rule_config");
class LocalVariableNamesConf extends _basic_rule_config_1.BasicRuleConfig {
    constructor() {
        super(...arguments);
        this.expectedData = "^L._.*$";
        this.expectedConstant = "^LC_.*$";
        this.expectedFS = "^<L._.*>$";
    }
}
exports.LocalVariableNamesConf = LocalVariableNamesConf;
class LocalVariableNames extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new LocalVariableNamesConf();
    }
    getKey() {
        return "local_variable_names";
    }
    getDescription() {
        return "Local Variable Names";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file) {
        let ret = [];
        const stru = file.getStructure();
        if (stru == undefined) {
            return [];
        }
        // inside METHOD, FORM, FUNCTION MODULE
        for (const node of stru.findAllStructures(Structures.Form)) {
            ret = ret.concat(this.checkLocals(node, file));
        }
        for (const node of stru.findAllStructures(Structures.Method)) {
            ret = ret.concat(this.checkLocals(node, file));
        }
        for (const node of stru.findAllStructures(Structures.FunctionModule)) {
            ret = ret.concat(this.checkLocals(node, file));
        }
        return ret;
    }
    checkLocals(structure, file) {
        let ret = [];
        // data, field symbols
        const data = structure.findAllStatements(Statements.Data);
        for (const dat of data) {
            const parent = structure.findParent(dat);
            if (parent && parent.get() instanceof Structures.Data) {
                continue; // inside DATA BEGIN OF
            }
            const found = dat.findFirstExpression(Expressions.NamespaceSimpleName);
            if (found) {
                const token = found.getFirstToken();
                ret = ret.concat(this.checkName(token, file, this.conf.expectedData));
            }
        }
        const datab = structure.findAllStatements(Statements.DataBegin);
        for (const dat of datab) {
            const found = dat.findFirstExpression(Expressions.NamespaceSimpleName);
            if (found) {
                const token = found.getFirstToken();
                ret = ret.concat(this.checkName(token, file, this.conf.expectedData));
            }
        }
        const fieldsymbols = structure.findAllStatements(Statements.FieldSymbol);
        for (const fieldsymbol of fieldsymbols) {
            const found = fieldsymbol.findFirstExpression(Expressions.FieldSymbol);
            if (found) {
                const token = found.getFirstToken();
                ret = ret.concat(this.checkName(token, file, this.conf.expectedFS));
            }
        }
        const constants = structure.findAllStatements(Statements.Constant);
        for (const constant of constants) {
            const parent = structure.findParent(constant);
            if (parent && parent.get() instanceof Structures.Constants) {
                continue; // inside DATA BEGIN OF
            }
            const found = constant.findFirstExpression(Expressions.NamespaceSimpleName);
            if (found) {
                const token = found.getFirstToken();
                ret = ret.concat(this.checkName(token, file, this.conf.expectedConstant));
            }
        }
        // todo: inline data, inline field symbols
        // todo: DATA BEGIN OF
        return ret;
    }
    checkName(token, file, expected) {
        const ret = [];
        const regex = new RegExp(expected, "i");
        const name = token.getStr();
        if (regex.test(name) === false) {
            const message = "Bad local name \"" + name + "\" expected \"" + expected + "/i\"";
            const issue = new issue_1.Issue({ file, message, key: this.getKey(), start: token.getPos() });
            ret.push(issue);
        }
        return ret;
    }
}
exports.LocalVariableNames = LocalVariableNames;
