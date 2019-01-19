import { INode } from "./_inode";
import { Token } from "../tokens/_token";
export declare abstract class BasicNode implements INode {
    protected children: INode[];
    constructor();
    abstract get(): any;
    abstract getFirstToken(): Token;
    abstract getLastToken(): Token;
    addChild(n: INode): INode;
    setChildren(children: INode[]): INode;
    getChildren(): INode[];
    getFirstChild(): INode | undefined;
    getLastChild(): INode | undefined;
}
