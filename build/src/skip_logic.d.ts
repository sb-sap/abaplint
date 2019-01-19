import { Registry } from "./registry";
import { IObject } from "./objects/_iobject";
import { Class, FunctionGroup } from "./objects";
export declare class SkipLogic {
    private reg;
    constructor(reg: Registry);
    skip(obj: IObject): boolean;
    isGeneratedFunctionGroup(group: FunctionGroup): boolean;
    isGeneratedGatewayClass(obj: Class): boolean;
    isGeneratedPersistentClass(obj: Class): boolean;
}
