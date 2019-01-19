import { Registry } from "../../registry";
import { BasicRuleConfig } from "../_basic_rule_config";
import { IObject } from "../../objects/_iobject";
export declare class CheckVariablesConf extends BasicRuleConfig {
}
export declare class CheckVariables {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): CheckVariablesConf;
    setConfig(conf: CheckVariablesConf): void;
    run(obj: IObject, reg: Registry): import("../../issue").Issue[];
}
