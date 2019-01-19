import { Issue } from "../issue";
import { ABAPRule } from "./_abap_rule";
import { ABAPFile } from "../files";
import { Registry } from "../registry";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class TryWithoutCatchConf extends BasicRuleConfig {
}
export declare class TryWithoutCatch extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): TryWithoutCatchConf;
    setConfig(conf: TryWithoutCatchConf): void;
    runParsed(file: ABAPFile, _reg: Registry): Issue[];
}
