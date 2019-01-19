import { Issue } from "../issue";
import { ABAPRule } from "./_abap_rule";
import { ABAPFile } from "../files";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class LineOnlyPuncConf extends BasicRuleConfig {
    ignoreExceptions: boolean;
}
export declare class LineOnlyPunc extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): LineOnlyPuncConf;
    setConfig(conf: LineOnlyPuncConf): void;
    runParsed(file: ABAPFile): Issue[];
}
