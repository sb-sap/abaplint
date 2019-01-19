import { StatementNode } from "../nodes";
import { ABAPObject } from "../../objects/_abap_object";
import { Registry } from "../../registry";
import { Variables } from "./_variables";
export declare class ObjectOriented {
    private obj;
    private reg;
    private variables;
    constructor(obj: ABAPObject, reg: Registry, variables: Variables);
    findClassName(node: StatementNode): string;
    classDefinition(node: StatementNode): void;
    classImplementation(node: StatementNode): void;
    methodImplementation(node: StatementNode): void;
    private findDefinition;
    private findMethod;
    private findMethodInSuper;
    private findSuperDefinition;
    private fromSuperClass;
}
