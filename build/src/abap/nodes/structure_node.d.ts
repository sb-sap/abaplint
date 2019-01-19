import { BasicNode } from "./_basic_node";
import { Structure } from "../structures/_structure";
import { StatementNode } from "./statement_node";
import { Statement } from "../statements/_statement";
import { Token } from "../tokens/_token";
import { Expression } from "../combi";
import { ExpressionNode } from "./expression_node";
export declare class StructureNode extends BasicNode {
    private structure;
    constructor(structure: Structure);
    get(): Structure;
    findParent(node: StatementNode): StructureNode | undefined;
    findFirstStatement(type: new () => Statement): StatementNode | undefined;
    findFirstExpression(type: new () => Expression): ExpressionNode | undefined;
    getFirstToken(): Token;
    getLastToken(): Token;
    findAllExpressions(type: new () => Expression): ExpressionNode[];
    findAllStatements(type: new () => Statement): StatementNode[];
    findAllStatementNodes(): StatementNode[];
    findAllStructures(type: new () => Structure): StructureNode[];
    findFirstStructure(type: new () => Structure): StructureNode | undefined;
}
