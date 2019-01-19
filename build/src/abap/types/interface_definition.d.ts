import { Identifier } from "./_identifier";
import { StructureNode } from "../nodes";
import { MethodDefinition } from ".";
export declare class InterfaceDefinition extends Identifier {
    private node;
    constructor(node: StructureNode);
    getMethodDefinitions(): MethodDefinition[];
}
