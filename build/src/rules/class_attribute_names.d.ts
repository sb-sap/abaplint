import { Issue } from "../issue";
import { IRule } from "./_irule";
import { IObject } from "../objects/_iobject";
import { Registry } from "../registry";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class ClassAttributeNamesConf extends BasicRuleConfig {
    ignoreExceptions: boolean;
    statics: string;
    instance: string;
}
export declare class ClassAttributeNames implements IRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): ClassAttributeNamesConf;
    setConfig(conf: ClassAttributeNamesConf): void;
    run(obj: IObject, _reg: Registry): Issue[];
    private checkAttributes;
    private checkName;
}
