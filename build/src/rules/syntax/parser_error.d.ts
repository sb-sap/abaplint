import { Issue } from "../../issue";
import { ABAPRule } from "../_abap_rule";
import { ABAPFile } from "../../files";
import { Registry } from "../../registry";
import { BasicRuleConfig } from "../_basic_rule_config";
export declare class ParserErrorConf extends BasicRuleConfig {
}
export declare class ParserError extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): ParserErrorConf;
    setConfig(conf: ParserErrorConf): void;
    runParsed(file: ABAPFile, reg: Registry): Issue[];
    private missingSpace;
}
