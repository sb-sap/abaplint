import { Variables } from "./_variables";
import { INode } from "../nodes/_inode";
import { Registry } from "../../registry";
export declare class Inline {
    private variables;
    private reg;
    constructor(variables: Variables, reg: Registry);
    private addVariable;
    update(node: INode): void;
    private findFields;
}
