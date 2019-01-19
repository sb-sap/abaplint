import { Structure } from "./_structure";
import { StatementNode } from "../nodes/";
import { INode } from "../nodes/_inode";
import { Statement } from "../statements/_statement";
export interface IMatch {
    matched: StatementNode[];
    unmatched: StatementNode[];
    error: boolean;
    errorDescription: string;
    errorMatched: number;
}
export interface IStructureRunnable {
    toRailroad(): string;
    getUsing(): string[];
    run(statements: StatementNode[], parent: INode): IMatch;
}
export declare function seq(first: IStructureRunnable, ...rest: IStructureRunnable[]): IStructureRunnable;
export declare function alt(first: IStructureRunnable, ...rest: IStructureRunnable[]): IStructureRunnable;
export declare function beginEnd(begin: IStructureRunnable, body: IStructureRunnable, end: IStructureRunnable): IStructureRunnable;
export declare function opt(o: IStructureRunnable): IStructureRunnable;
export declare function star(s: IStructureRunnable): IStructureRunnable;
export declare function sta(s: new () => Statement): IStructureRunnable;
export declare function sub(s: Structure): IStructureRunnable;
