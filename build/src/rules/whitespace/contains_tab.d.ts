import { Issue } from "../../issue";
import { ABAPRule } from "../_abap_rule";
import { ABAPFile } from "../../files";
import { BasicRuleConfig } from "../_basic_rule_config";
export declare class ContainsTabConf extends BasicRuleConfig {
}
export declare class ContainsTab extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): ContainsTabConf;
    setConfig(conf: ContainsTabConf): void;
    runParsed(file: ABAPFile): Issue[];
}
