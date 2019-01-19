import { Identifier } from "./_identifier";
import { Token } from "../tokens/_token";
import { INode } from "../nodes/_inode";
export declare abstract class TypedIdentifier extends Identifier {
    constructor(token: Token, node: INode);
}
