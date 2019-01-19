"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const objects_1 = require("../objects");
const _basic_rule_config_1 = require("./_basic_rule_config");
const position_1 = require("../position");
// standard class CL_OO_CLASS assumes classes have descriptions
class DescriptionEmptyConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.DescriptionEmptyConf = DescriptionEmptyConf;
class DescriptionEmpty {
    constructor() {
        this.conf = new DescriptionEmptyConf();
    }
    getKey() {
        return "description_empty";
    }
    getDescription() {
        return "Description empty";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    run(obj, _reg) {
        const issues = [];
        if (obj instanceof objects_1.Class) {
            if (obj.getDescription() === "") {
                const issue = new issue_1.Issue({ file: obj.getFiles()[0], message: this.getDescription(), key: this.getKey(), start: new position_1.Position(1, 1) });
                issues.push(issue);
            }
        }
        // todo, add INTF
        return issues;
    }
}
exports.DescriptionEmpty = DescriptionEmpty;
