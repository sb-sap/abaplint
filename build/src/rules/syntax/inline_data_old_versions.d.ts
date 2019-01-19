import { Issue } from "../../issue";
import { ABAPRule } from "../_abap_rule";
import { ABAPFile } from "../../files";
import { Registry } from "../../registry";
import { BasicRuleConfig } from "../_basic_rule_config";
export declare class InlineDataOldVersionsConf extends BasicRuleConfig {
}
export declare class InlineDataOldVersions extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): InlineDataOldVersionsConf;
    setConfig(conf: InlineDataOldVersionsConf): void;
    runParsed(file: ABAPFile, reg: Registry): Issue[];
}
