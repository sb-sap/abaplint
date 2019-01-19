import { Scope } from "./scope";
import { StatementNode } from "../nodes";
import { TypedIdentifier } from "./_typed_identifier";
export declare class ClassAttribute extends TypedIdentifier {
    private scope;
    constructor(node: StatementNode, scope: Scope);
    getScope(): Scope;
}
