import { Issue } from "../issue";
import { ABAPRule } from "./_abap_rule";
import { ABAPFile } from "../files";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class LocalVariableNamesConf extends BasicRuleConfig {
    expectedData: string;
    expectedConstant: string;
    expectedFS: string;
}
export declare class LocalVariableNames extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): LocalVariableNamesConf;
    setConfig(conf: LocalVariableNamesConf): void;
    runParsed(file: ABAPFile): Issue[];
    private checkLocals;
    private checkName;
}
