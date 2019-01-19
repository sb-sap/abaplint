import { Position } from "../../position";
import { Token } from "../tokens/_token";
import { INode } from "../nodes/_inode";
export declare abstract class Identifier {
    private name;
    private position;
    private start;
    private end;
    constructor(token: Token, node: INode);
    getName(): string;
    getPosition(): Position;
    getStart(): Position;
    getEnd(): Position;
}
