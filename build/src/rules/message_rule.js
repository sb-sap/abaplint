"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Expressions = require("../abap/expressions");
const issue_1 = require("../issue");
const _abap_rule_1 = require("./_abap_rule");
const _basic_rule_config_1 = require("./_basic_rule_config");
class MessageConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.MessageConf = MessageConf;
class MessageRule extends _abap_rule_1.ABAPRule {
    constructor() {
        super(...arguments);
        this.conf = new MessageConf();
    }
    getKey() {
        return "message";
    }
    getDescription() {
        return "Message checks";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    runParsed(file, reg) {
        const issues = [];
        const struc = file.getStructure();
        if (struc === undefined) {
            return [];
        }
        for (const node of struc.findAllExpressions(Expressions.MessageClass)) {
            const token = node.getFirstToken();
            if (reg.getObject("MSAG", token.getStr()) === undefined) {
                const message = "Message class \"" + token.getStr() + "\" not found";
                issues.push(new issue_1.Issue({ file, message, key: this.getKey(), start: token.getPos() }));
            }
        }
        for (const node of struc.findAllExpressions(Expressions.MessageSource)) {
            const clas = node.findFirstExpression(Expressions.MessageClass);
            if (clas === undefined) {
                // todo, handle case where message class is defined on header level instead of in the statement
                continue;
            }
            const name = clas.getFirstToken().getStr();
            const msag = reg.getObject("MSAG", name);
            if (msag === undefined) {
                continue; // issue is issued above
            }
            const typeNumber = node.findFirstExpression(Expressions.MessageTypeAndNumber);
            if (typeNumber === undefined) {
                continue;
            }
            const numberToken = typeNumber.getFirstToken();
            const num = numberToken.getStr().substr(1);
            if (msag.getByNumber(num) === undefined) {
                const message = "Message number \"" + num + "\" not found in class \"" + name + "\"";
                issues.push(new issue_1.Issue({ file, message, key: this.getKey(), start: numberToken.getPos() }));
            }
        }
        // todo, check number of placeholders in message vs code matches
        return issues;
    }
}
exports.MessageRule = MessageRule;
