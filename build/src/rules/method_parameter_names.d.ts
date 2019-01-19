import { Issue } from "../issue";
import { IRule } from "./_irule";
import { IObject } from "../objects/_iobject";
import { Registry } from "../registry";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class MethodParameterNamesConf extends BasicRuleConfig {
    ignoreExceptions: boolean;
    importing: string;
    returning: string;
    changing: string;
    exporting: string;
    ignoreNames: string[];
}
export declare class MethodParameterNames implements IRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): MethodParameterNamesConf;
    setConfig(conf: MethodParameterNamesConf): void;
    run(obj: IObject, _reg: Registry): Issue[];
    private checkMethod;
    private checkParameter;
}
