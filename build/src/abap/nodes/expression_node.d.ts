import { CountableNode } from "./_countable_node";
import { Expression } from "../combi";
import { Token } from "../tokens/_token";
export declare class ExpressionNode extends CountableNode {
    private expression;
    constructor(expression: Expression);
    get(): Expression;
    getFirstToken(): Token;
    getLastToken(): Token;
    getAllTokens(): Token[];
    findDirectTokenByText(text: string): Token | undefined;
    findAllExpressions(type: new () => Expression): ExpressionNode[];
    findFirstExpression(type: new () => Expression): ExpressionNode | undefined;
}
