import { Issue } from "../issue";
import { ABAPRule } from "./_abap_rule";
import { ABAPFile } from "../files";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class ExitOrCheckConf extends BasicRuleConfig {
}
export declare class ExitOrCheck extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): ExitOrCheckConf;
    setConfig(conf: ExitOrCheckConf): void;
    runParsed(file: ABAPFile): Issue[];
}
