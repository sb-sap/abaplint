import { Version } from "./version";
import { IRule } from "./rules/_irule";
export interface IGlobalConfig {
    version: string;
    skipGeneratedGatewayClasses: boolean;
    skipGeneratedPersistentClasses: boolean;
    skipGeneratedFunctionGroups: boolean;
}
export interface IConfig {
    global: IGlobalConfig;
    rules: any;
}
export declare class Config {
    private static defaultVersion;
    private config;
    static getDefault(): Config;
    private static getGlobalDefault;
    getEnabledRules(): IRule[];
    constructor(json: string);
    get(): IConfig;
    readByKey(rule: string, key: string): any;
    readByRule(rule: string): any;
    getGlobal(): IGlobalConfig;
    getVersion(): Version;
    setVersion(ver: Version | undefined): Config;
}
