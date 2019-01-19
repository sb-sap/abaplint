import { Identifier } from "./_identifier";
import { StructureNode } from "../../abap/nodes";
import { MethodImplementation } from "./method_implementation";
export declare class ClassImplementation extends Identifier {
    private node;
    constructor(node: StructureNode);
    getMethodImplementations(): MethodImplementation[];
}
