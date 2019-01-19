"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const version_1 = require("./version");
const artifacts_1 = require("./artifacts");
class Config {
    constructor(json) {
        this.config = JSON.parse(json);
        if (this.config.global === undefined) {
            this.config.global = Config.getGlobalDefault();
        }
    }
    static getDefault() {
        const defaults = [];
        const sorted = artifacts_1.Artifacts.getRules().sort((a, b) => { return a.getKey().localeCompare(b.getKey()); });
        for (const rule of sorted) {
            defaults.push("\"" + rule.getKey() + "\": " + JSON.stringify(rule.getConfig()));
        }
        const global = this.getGlobalDefault();
        // todo, use real object with index signature instead of "defaults"
        const json = "{" +
            "\"global\": " + JSON.stringify(global) + ", " +
            "\"rules\": {" + defaults.join(", ") + "}}";
        const conf = new Config(json);
        return conf;
    }
    static getGlobalDefault() {
        return {
            version: version_1.versionToText(Config.defaultVersion),
            skipGeneratedGatewayClasses: true,
            skipGeneratedPersistentClasses: true,
            skipGeneratedFunctionGroups: true,
        };
    }
    getEnabledRules() {
        const rules = [];
        for (const rule of artifacts_1.Artifacts.getRules()) {
            if (this.readByKey(rule.getKey(), "enabled") === true) {
                rule.setConfig(this.readByRule(rule.getKey()));
                rules.push(rule);
            }
        }
        return rules;
    }
    get() {
        return this.config;
    }
    readByKey(rule, key) {
        // todo: when reading enabled for a rule that is not in abaplint.json
        //       should the rule be enabled by default?
        return this.config["rules"][rule] ? this.config["rules"][rule][key] : undefined;
    }
    readByRule(rule) {
        return this.config["rules"][rule];
    }
    getGlobal() {
        return this.config.global;
    }
    getVersion() {
        if (this.config.global === undefined || this.config.global.version === undefined) {
            return Config.defaultVersion;
        }
        return version_1.textToVersion(this.config.global.version);
    }
    setVersion(ver) {
        if (ver === undefined) {
            return this;
        }
        this.config.global.version = version_1.versionToText(ver);
        return this;
    }
}
Config.defaultVersion = version_1.Version.v753;
exports.Config = Config;
