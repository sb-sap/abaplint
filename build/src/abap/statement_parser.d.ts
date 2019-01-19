import { StatementNode } from "./nodes/";
import { Version } from "../version";
import { Token } from "./tokens/_token";
export declare class StatementParser {
    private static statements;
    private static map;
    static run(tokens: Token[], ver: Version): StatementNode[];
    private static tokensToNodes;
    private static macros;
    private static nativeSQL;
    private static removeLast;
    private static categorize;
    private static removePragma;
    private static match;
    private static process;
}
