import { Issue } from "../issue";
import { IRule } from "./_irule";
import { IObject } from "../objects/_iobject";
import { Registry } from "../registry";
import { BasicRuleConfig } from "./_basic_rule_config";
export declare class IdenticalFormNamesConf extends BasicRuleConfig {
}
export declare class IdenticalFormNames implements IRule {
    private conf;
    getKey(): string;
    getDescription(): string;
    getConfig(): IdenticalFormNamesConf;
    setConfig(conf: IdenticalFormNamesConf): void;
    run(obj: IObject, _reg: Registry): Issue[];
}
