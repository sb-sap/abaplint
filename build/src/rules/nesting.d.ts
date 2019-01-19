import { Issue } from "../issue";
import { ABAPRule } from "./_abap_rule";
import { ABAPFile } from "../files";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class NestingConf extends BasicRuleConfig {
    depth: number;
}
export declare class Nesting extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): NestingConf;
    setConfig(conf: NestingConf): void;
    runParsed(file: ABAPFile): Issue[];
}
