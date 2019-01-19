import { StatementNode } from "../../abap/nodes/statement_node";
import { MethodParameter } from "./method_parameter";
export declare class MethodParameters {
    private importing;
    private exporting;
    private changing;
    private returning;
    private exceptions;
    constructor(node: StatementNode);
    getAll(): MethodParameter[];
    getImporting(): MethodParameter[];
    getExporting(): MethodParameter[];
    getChanging(): MethodParameter[];
    getReturning(): MethodParameter | undefined;
    getExceptions(): string[];
    private parse;
    private add;
}
