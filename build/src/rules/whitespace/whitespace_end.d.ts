import { Issue } from "../../issue";
import { ABAPRule } from "../_abap_rule";
import { ABAPFile } from "../../files";
import { BasicRuleConfig } from "../_basic_rule_config";
export declare class WhitespaceEndConf extends BasicRuleConfig {
}
export declare class WhitespaceEnd extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): WhitespaceEndConf;
    setConfig(conf: WhitespaceEndConf): void;
    runParsed(file: ABAPFile): Issue[];
}
