import { StructureNode } from "../../abap/nodes";
import { MethodDefinitions } from "./method_definitions";
import { ClassAttributes } from "./class_attributes";
import { Identifier } from "./_identifier";
export declare class ClassDefinition extends Identifier {
    private node;
    constructor(node: StructureNode);
    getMethodDefinitions(): MethodDefinitions | undefined;
    getSuperClass(): string | undefined;
    getAttributes(): ClassAttributes | undefined;
    isException(): boolean;
    isLocal(): boolean;
    isGlobal(): boolean;
    isFinal(): boolean;
}
