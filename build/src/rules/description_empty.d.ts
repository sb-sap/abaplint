import { Issue } from "../issue";
import { IRule } from "./_irule";
import { IObject } from "../objects/_iobject";
import { Registry } from "../registry";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class DescriptionEmptyConf extends BasicRuleConfig {
}
export declare class DescriptionEmpty implements IRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): DescriptionEmptyConf;
    setConfig(conf: DescriptionEmptyConf): void;
    run(obj: IObject, _reg: Registry): Issue[];
}
