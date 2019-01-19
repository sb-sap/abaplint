import { MethodDefinition } from "./method_definition";
import { StructureNode } from "../../abap/nodes";
export declare class MethodDefinitions {
    private pri;
    private pub;
    private pro;
    constructor(node: StructureNode);
    getPublic(): MethodDefinition[];
    getProtected(): MethodDefinition[];
    getPrivate(): MethodDefinition[];
    getAll(): MethodDefinition[];
    private parse;
}
