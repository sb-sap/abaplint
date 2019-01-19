"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const _abap_rule_1 = require("./_abap_rule");
const objects_1 = require("../objects");
const _basic_rule_config_1 = require("./_basic_rule_config");
const pretty_printer_1 = require("../abap/pretty_printer");
class IndentationConf extends _basic_rule_config_1.BasicRuleConfig {
    constructor() {
        super(...arguments);
        this.ignoreExceptions = true;
    }
}
exports.IndentationConf = IndentationConf;
class Indentation extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new IndentationConf();
    }
    getKey() {
        return "indentation";
    }
    getDescription() {
        return "Indentation";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file, _reg, obj) {
        if (file.getStructure() == undefined) {
            return []; // syntax error in file
        }
        if (obj instanceof objects_1.Class) {
            const definition = obj.getClassDefinition();
            if (definition === undefined) {
                return [];
            }
            else if (this.conf.ignoreExceptions && definition.isException()) {
                return [];
            }
        }
        const expected = new pretty_printer_1.PrettyPrinter(file).getExpectedIndentation();
        for (const statement of file.getStatements()) {
            const position = statement.getFirstToken().getPos();
            const indent = expected.shift();
            if (indent && indent > 0 && indent !== position.getCol()) {
                const issue = new issue_1.Issue({ file, message: this.getDescription(), key: this.getKey(), start: position });
                return [issue]; // only one finding per include
            }
        }
        return [];
    }
}
exports.Indentation = Indentation;
