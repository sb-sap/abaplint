import { Issue } from "../issue";
import { ABAPRule } from "./_abap_rule";
import { ABAPFile } from "../files";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class MixReturningConf extends BasicRuleConfig {
}
export declare class MixReturning extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): MixReturningConf;
    setConfig(conf: MixReturningConf): void;
    runParsed(file: ABAPFile): Issue[];
}
