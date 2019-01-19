import { Scope } from "./scope";
import { StatementNode } from "../nodes";
import { Constant } from "./constant";
export declare class ClassConstant extends Constant {
    private scope;
    constructor(node: StatementNode, scope: Scope);
    getScope(): Scope;
}
