"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const objects_1 = require("../objects");
const _basic_rule_config_1 = require("./_basic_rule_config");
const position_1 = require("../position");
class MessageTextEmptyConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.MessageTextEmptyConf = MessageTextEmptyConf;
class MessageTextEmpty {
    constructor() {
        this.conf = new MessageTextEmptyConf();
    }
    getKey() {
        return "message_text_empty";
    }
    getDescription() {
        return "Message text empty";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    run(obj, _reg) {
        const issues = [];
        if (obj instanceof objects_1.MessageClass) {
            for (const msg of obj.getMessages()) {
                if (msg.getMessage() === "") {
                    const message = this.getDescription() + ", " + msg.getNumber();
                    const issue = new issue_1.Issue({ file: obj.getFiles()[0], message, key: this.getKey(), start: new position_1.Position(1, 1) });
                    issues.push(issue);
                }
            }
        }
        return issues;
    }
}
exports.MessageTextEmpty = MessageTextEmpty;
