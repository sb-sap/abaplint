import { Issue } from "../../issue";
import { ABAPRule } from "../_abap_rule";
import { ABAPFile } from "../../files";
import { BasicRuleConfig } from "../_basic_rule_config";
export declare class StartAtTabConf extends BasicRuleConfig {
}
export declare class StartAtTab extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): StartAtTabConf;
    setConfig(conf: StartAtTabConf): void;
    runParsed(file: ABAPFile): Issue[];
}
