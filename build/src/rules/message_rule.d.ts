import { Issue } from "../issue";
import { ABAPRule } from "./_abap_rule";
import { ABAPFile } from "../files";
import { BasicRuleConfig } from "./_basic_rule_config";
import { Registry } from "../registry";
export declare class MessageConf extends BasicRuleConfig {
}
export declare class MessageRule extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): MessageConf;
    setConfig(conf: MessageConf): void;
    runParsed(file: ABAPFile, reg: Registry): Issue[];
}
