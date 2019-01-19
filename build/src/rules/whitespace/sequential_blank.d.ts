import { Issue } from "../../issue";
import { ABAPRule } from "../_abap_rule";
import { ABAPFile } from "../../files";
import { BasicRuleConfig } from "../_basic_rule_config";
export declare class SequentialBlankConf extends BasicRuleConfig {
    lines: number;
}
export declare class SequentialBlank extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): SequentialBlankConf;
    setConfig(conf: SequentialBlankConf): void;
    runParsed(file: ABAPFile): Issue[];
}
