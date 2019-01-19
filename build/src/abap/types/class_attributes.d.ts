import { ClassAttribute } from "./class_attribute";
import { ClassConstant } from "./class_constant";
import { StructureNode } from "../../abap/nodes";
export declare class ClassAttributes {
    private static;
    private instance;
    private constants;
    constructor(node: StructureNode);
    getStatic(): ClassAttribute[];
    getInstance(): ClassAttribute[];
    getConstants(): ClassConstant[];
    private parse;
    private parseSection;
}
