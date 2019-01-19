import { Issue } from "../../issue";
import { TypedIdentifier } from "../types/_typed_identifier";
import { Token } from "../tokens/_token";
import { Registry } from "../../registry";
import { ABAPObject } from "../../objects/_abap_object";
export declare class CheckVariablesLogic {
    private object;
    private currentFile;
    private variables;
    private issues;
    private reg;
    private oooc;
    private proc;
    private inline;
    constructor(reg: Registry, object: ABAPObject);
    findIssues(ignoreParserError?: boolean): Issue[];
    resolveToken(token: Token): TypedIdentifier | string | undefined;
    private newIssue;
    private traverse;
    private updateVariables;
}
