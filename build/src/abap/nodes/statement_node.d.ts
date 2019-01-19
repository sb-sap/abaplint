import { BasicNode } from "./_basic_node";
import { Statement } from "../statements/_statement";
import { INode } from "./_inode";
import { Position } from "../../position";
import { Token } from "../tokens/_token";
import { ExpressionNode } from "./expression_node";
import { Expression } from "../combi";
export declare class StatementNode extends BasicNode {
    private statement;
    constructor(statement: Statement);
    get(): Statement;
    setChildren(children: INode[]): StatementNode;
    getStart(): Position;
    getEnd(): Position;
    getTokens(): Token[];
    concatTokens(): string;
    getTerminator(): string;
    getFirstToken(): Token;
    getLastToken(): Token;
    findFirstExpression(type: new () => Expression): ExpressionNode | undefined;
    findAllExpressions(type: new () => Expression): ExpressionNode[];
    private toTokens;
}
