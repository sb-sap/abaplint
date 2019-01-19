import { Issue } from "../../issue";
import { ABAPRule } from "../_abap_rule";
import { ABAPFile } from "../../files";
import { BasicRuleConfig } from "../_basic_rule_config";
export declare class ColonMissingSpaceConf extends BasicRuleConfig {
}
export declare class ColonMissingSpace extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): ColonMissingSpaceConf;
    setConfig(conf: ColonMissingSpaceConf): void;
    runParsed(file: ABAPFile): Issue[];
}
