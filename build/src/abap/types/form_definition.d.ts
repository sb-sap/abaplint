import { Identifier } from "./_identifier";
import { StructureNode } from "../../abap/nodes";
import { FormParameter } from "./form_parameter";
export declare class FormDefinition extends Identifier {
    private node;
    constructor(node: StructureNode);
    getParameters(): FormParameter[];
}
