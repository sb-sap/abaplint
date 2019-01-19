import { Issue } from "../issue";
import { ABAPRule } from "./_abap_rule";
import { ABAPFile } from "../files";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class CommentedCodeConf extends BasicRuleConfig {
}
export declare class CommentedCode extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): CommentedCodeConf;
    setConfig(conf: CommentedCodeConf): void;
    runParsed(file: ABAPFile): Issue[];
    private check;
}
