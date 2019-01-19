"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const issue_1 = require("../issue");
const version_1 = require("../version");
const Objects = require("../objects");
const _basic_rule_config_1 = require("./_basic_rule_config");
class CloudTypesConf extends _basic_rule_config_1.BasicRuleConfig {
}
exports.CloudTypesConf = CloudTypesConf;
class CloudTypes {
    constructor() {
        this.conf = new CloudTypesConf();
    }
    getKey() {
        return "cloud_types";
    }
    getDescription() {
        return "Object type not supported in cloud";
    }
    getConfig() {
        return this.conf;
    }
    setConfig(conf) {
        this.conf = conf;
    }
    run(obj, reg) {
        if (reg.getConfig().getVersion() !== version_1.Version.Cloud
            || obj instanceof Objects.Class
            || obj instanceof Objects.Interface
            || obj instanceof Objects.MessageClass
            || obj instanceof Objects.Package
            || obj instanceof Objects.Table
            || obj instanceof Objects.DataDefinition
            || obj instanceof Objects.DataControl
            || obj instanceof Objects.LockObject
            || obj instanceof Objects.Transformation
            || obj instanceof Objects.FunctionGroup
            || obj instanceof Objects.DataElement
            || obj instanceof Objects.Domain) {
            return [];
        }
        return [new issue_1.Issue({ file: obj.getFiles()[0], key: this.getKey(), message: this.getDescription() })];
    }
}
exports.CloudTypes = CloudTypes;
