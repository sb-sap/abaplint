import { Position } from "../position";
import { Issue } from "../issue";
import { ABAPRule } from "./_abap_rule";
import { ABAPFile } from "../files";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class Counter {
    exporting: boolean;
    other: boolean;
    pos: Position;
}
export declare class ExportingConf extends BasicRuleConfig {
}
export declare class Exporting extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    runParsed(file: ABAPFile): Issue[];
    getConfig(): ExportingConf;
    setConfig(conf: ExportingConf): void;
    private lastChar;
    private firstChar;
}
