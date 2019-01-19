import { StatementNode } from "../nodes";
import { ABAPObject } from "../../objects/_abap_object";
import { Registry } from "../../registry";
import { Variables } from "./_variables";
export declare class Procedural {
    private obj;
    private variables;
    constructor(obj: ABAPObject, _reg: Registry, variables: Variables);
    findDefinitions(node: StatementNode): void;
    findFunctionScope(node: StatementNode): void;
    findFormScope(node: StatementNode): void;
    private findDefinition;
    private addVariable;
}
