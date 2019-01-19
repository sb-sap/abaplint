import { CountableNode } from "./_countable_node";
import { Token } from "../tokens/_token";
export declare class TokenNode extends CountableNode {
    private token;
    constructor(token: Token);
    get(): Token;
    countTokens(): number;
    getFirstToken(): Token;
    getLastToken(): Token;
}
export declare class TokenNodeRegex extends TokenNode {
}
