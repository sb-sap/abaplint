import { Config } from "../../src/config";
import { Version } from "../../src/version";
import { Structure } from "../../src/abap/structures/_structure";
export declare function getTokens(abap: string): import("../../src/abap/tokens/_token").Token[];
export declare function getStatements(abap: string, version?: Version): import("../../src/abap/nodes").StatementNode[];
export declare function findIssues(abap: string): import("../../src/issue").Issue[];
export declare function parse(abap: string, config?: Config): import("../../src/files").ABAPFile;
export declare function structureType(cas: {
    abap: string;
}[], expected: Structure): void;
export declare function statementType(tests: any, description: string, type: any): void;
export declare function statementVersion(tests: any, description: string, type: any): void;
