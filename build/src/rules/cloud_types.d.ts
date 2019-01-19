import { IRule } from "./_irule";
import { Issue } from "../issue";
import { IObject } from "../objects/_iobject";
import { Registry } from "../registry";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class CloudTypesConf extends BasicRuleConfig {
}
export declare class CloudTypes implements IRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): CloudTypesConf;
    setConfig(conf: CloudTypesConf): void;
    run(obj: IObject, reg: Registry): Issue[];
}
