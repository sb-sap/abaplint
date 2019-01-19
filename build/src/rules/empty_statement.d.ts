import { Issue } from "../issue";
import { ABAPRule } from "./_abap_rule";
import { ABAPFile } from "../files";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class EmptyStatementConf extends BasicRuleConfig {
}
export declare class EmptyStatement extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): EmptyStatementConf;
    setConfig(conf: EmptyStatementConf): void;
    runParsed(file: ABAPFile): Issue[];
}
