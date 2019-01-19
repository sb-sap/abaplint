import { Issue } from "../../issue";
import { ABAPRule } from "./../_abap_rule";
import { ABAPFile } from "../../files";
import { Registry } from "../../registry";
import { IObject } from "../../objects/_iobject";
import { BasicRuleConfig } from "../_basic_rule_config";
export declare class SuperclassFinalConf extends BasicRuleConfig {
}
export declare class SuperclassFinal extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): SuperclassFinalConf;
    setConfig(conf: SuperclassFinalConf): void;
    runParsed(file: ABAPFile, reg: Registry, obj: IObject): Issue[];
}
