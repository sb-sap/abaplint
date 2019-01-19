import { Issue } from "../issue";
import { ABAPRule } from "./_abap_rule";
import { ABAPFile } from "../files";
import { IObject } from "../objects/_iobject";
import { Registry } from "../registry";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class LocalClassNamingConf extends BasicRuleConfig {
    local: string;
    test: string;
}
export declare class LocalClassNaming extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): LocalClassNamingConf;
    setConfig(conf: LocalClassNamingConf): void;
    runParsed(file: ABAPFile, _reg: Registry, obj: IObject): Issue[];
}
