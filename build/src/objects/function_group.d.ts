import { ABAPObject } from "./_abap_object";
import { FunctionModuleDefinition } from "../abap/types";
export declare class FunctionGroup extends ABAPObject {
    getType(): string;
    getModules(): FunctionModuleDefinition[];
    getModule(name: string): FunctionModuleDefinition | undefined;
    private parse;
    private getXML;
}
