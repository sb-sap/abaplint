import { Issue } from "../issue";
import { ABAPRule } from "./_abap_rule";
import { ABAPFile } from "../files";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class MaxOneStatementConf extends BasicRuleConfig {
}
export declare class MaxOneStatement extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): MaxOneStatementConf;
    setConfig(conf: MaxOneStatementConf): void;
    runParsed(file: ABAPFile): Issue[];
}
