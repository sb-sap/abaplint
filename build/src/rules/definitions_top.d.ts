import { Issue } from "../issue";
import { ABAPRule } from "./_abap_rule";
import { ABAPFile } from "../files";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class DefinitionsTopConf extends BasicRuleConfig {
}
export declare class DefinitionsTop extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): DefinitionsTopConf;
    setConfig(conf: DefinitionsTopConf): void;
    runParsed(file: ABAPFile): Issue[];
}
