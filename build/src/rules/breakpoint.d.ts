import { Issue } from "../issue";
import { ABAPRule } from "./_abap_rule";
import { ABAPFile } from "../files";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class BreakpointConf extends BasicRuleConfig {
}
export declare class Breakpoint extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): BreakpointConf;
    setConfig(conf: BreakpointConf): void;
    runParsed(file: ABAPFile): Issue[];
}
