import { Issue } from "../../issue";
import { ABAPRule } from "./../_abap_rule";
import { ABAPFile } from "../../files";
import { Registry } from "../../registry";
import { IObject } from "../../objects/_iobject";
import { BasicRuleConfig } from "../_basic_rule_config";
export declare class GlobalClassConf extends BasicRuleConfig {
}
export declare class GlobalClass extends ABAPRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): GlobalClassConf;
    setConfig(conf: GlobalClassConf): void;
    runParsed(file: ABAPFile, _reg: Registry, obj: IObject): Issue[];
}
