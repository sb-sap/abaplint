import { Issue } from "../issue";
import { ABAPRule } from "./_abap_rule";
import { ABAPFile } from "../files";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class FunctionalWritingConf extends BasicRuleConfig {
    ignoreExceptions: boolean;
}
export declare class FunctionalWriting extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): FunctionalWritingConf;
    setConfig(conf: FunctionalWritingConf): void;
    runParsed(file: ABAPFile): Issue[];
    private startsWith;
}
