import { Issue } from "../issue";
import { ABAPRule } from "./_abap_rule";
import { ABAPFile } from "../files";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class LineLengthConf extends BasicRuleConfig {
    length: number;
}
export declare class LineLength extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): LineLengthConf;
    setConfig(conf: LineLengthConf): void;
    runParsed(file: ABAPFile): Issue[];
}
