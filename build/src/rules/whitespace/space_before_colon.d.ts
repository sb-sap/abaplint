import { Issue } from "../../issue";
import { ABAPRule } from "../_abap_rule";
import { ABAPFile } from "../../files";
import { BasicRuleConfig } from "../_basic_rule_config";
export declare class SpaceBeforeColonConf extends BasicRuleConfig {
}
export declare class SpaceBeforeColon extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): SpaceBeforeColonConf;
    setConfig(conf: SpaceBeforeColonConf): void;
    runParsed(file: ABAPFile): Issue[];
}
