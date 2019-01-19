import { Issue } from "../issue";
import { IObject } from "../objects/_iobject";
import { Registry } from "../registry";
import { IRule } from "./_irule";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class MethodLengthConf extends BasicRuleConfig {
    statements: number;
}
export declare class MethodLength implements IRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): MethodLengthConf;
    setConfig(conf: MethodLengthConf): void;
    run(obj: IObject, _reg: Registry): Issue[];
}
