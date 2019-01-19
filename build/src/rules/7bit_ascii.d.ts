import { Issue } from "../issue";
import { ABAPRule } from "./_abap_rule";
import { ABAPFile } from "../files";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class SevenBitAsciiConf extends BasicRuleConfig {
}
export declare class SevenBitAscii extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): SevenBitAsciiConf;
    setConfig(conf: SevenBitAsciiConf): void;
    runParsed(file: ABAPFile): Issue[];
}
