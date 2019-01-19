import { Issue } from "../issue";
import { ABAPRule } from "./_abap_rule";
import { ABAPFile } from "../files";
import { IObject } from "../objects/_iobject";
import { Registry } from "../registry";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class KeywordsUpperConf extends BasicRuleConfig {
    ignoreExceptions: boolean;
}
export declare class KeywordsUpper extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): KeywordsUpperConf;
    setConfig(conf: KeywordsUpperConf): void;
    runParsed(file: ABAPFile, _reg: Registry, obj: IObject): Issue[];
    private traverse;
}
