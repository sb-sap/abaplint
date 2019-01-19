import { Issue } from "../issue";
import { ABAPRule } from "./_abap_rule";
import { ABAPFile } from "../files";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class ObsoleteStatementConf extends BasicRuleConfig {
    refresh: boolean;
    compute: boolean;
    add: boolean;
    subtract: boolean;
    multiply: boolean;
    move: boolean;
    divide: boolean;
    requested: boolean;
}
export declare class ObsoleteStatement extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): ObsoleteStatementConf;
    setConfig(conf: ObsoleteStatementConf): void;
    runParsed(file: ABAPFile): Issue[];
}
