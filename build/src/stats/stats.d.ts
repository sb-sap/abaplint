import { Registry, IProgress } from "../registry";
export interface ITotals {
    statements: number;
    tokens: number;
    files: number;
    objects: number;
}
export interface ITypeCount {
    type: string;
    count: number;
}
export interface IObjectOrientation {
    oo: number;
    non: number;
}
export interface IResult {
    version: string;
    target: string;
    time: string;
    totals: ITotals;
    objects: ITypeCount[];
    issues: ITypeCount[];
    statements: ITypeCount[];
    objectOrientation: IObjectOrientation;
    methodLength: number[];
    statementTypes: ITypeCount[];
}
export declare class Stats {
    private reg;
    constructor(reg: Registry);
    run(progress?: IProgress): IResult;
    private sort;
    private buildMethodLength;
    private buildObjectOrientation;
    private buildStatements;
    private statementsVersion;
    private buildIssues;
    private buildObjects;
    private buildTotals;
    private countStatements;
    private countTokens;
    private countFiles;
}
