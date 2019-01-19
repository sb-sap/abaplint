import { StatementNode } from "../../abap/nodes";
import { MethodParameters } from "./method_parameters";
import { Scope } from "./scope";
import { Identifier } from "./_identifier";
export declare class MethodDefinition extends Identifier {
    private scope;
    private parameters;
    private redfinition;
    constructor(node: StatementNode, scope: Scope);
    getScope(): Scope;
    isRedefinition(): boolean;
    getParameters(): MethodParameters;
}
