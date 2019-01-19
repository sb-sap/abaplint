import { Token as Tokens_Token } from "./tokens/_token";
import { Position } from "../position";
import { Version } from "../version";
import { CountableNode } from "./nodes/_countable_node";
import { INode } from "./nodes/_inode";
export declare class Result {
    private tokens;
    private nodes;
    constructor(a: Tokens_Token[], n?: CountableNode[]);
    peek(): Tokens_Token;
    shift(node?: CountableNode): Result;
    getTokens(): Tokens_Token[];
    popNode(): CountableNode | undefined;
    getNodes(): CountableNode[];
    setNodes(n: CountableNode[]): void;
    length(): number;
    toStr(): string;
}
export interface IStatementRunnable {
    run(r: Result[]): Result[];
    railroad(): string;
    toStr(): string;
    getUsing(): string[];
    listKeywords(): string[];
    first(): string;
}
export declare abstract class Expression implements IStatementRunnable {
    run(r: Result[]): Result[];
    abstract getRunnable(): IStatementRunnable;
    listKeywords(): string[];
    getUsing(): string[];
    getName(): string;
    railroad(): string;
    toStr(): string;
    first(): string;
}
export declare class Combi {
    private static ver;
    static railroad(runnable: IStatementRunnable, complex?: boolean): string;
    static listKeywords(runnable: IStatementRunnable): string[];
    static run(runnable: IStatementRunnable, tokens: Tokens_Token[], version: Version): INode[] | undefined;
    static getVersion(): Version;
}
export declare function str(s: string): IStatementRunnable;
export declare function seq(first: IStatementRunnable, ...rest: IStatementRunnable[]): IStatementRunnable;
export declare function seqs(first: IStatementRunnable, ...rest: IStatementRunnable[]): IStatementRunnable;
export declare function alt(first: IStatementRunnable, ...rest: IStatementRunnable[]): IStatementRunnable;
export declare function altPrio(first: IStatementRunnable, ...rest: IStatementRunnable[]): IStatementRunnable;
export declare function per(first: IStatementRunnable, ...rest: IStatementRunnable[]): IStatementRunnable;
export declare function opt(first: IStatementRunnable): IStatementRunnable;
export declare function optPrio(first: IStatementRunnable): IStatementRunnable;
export declare function tok(t: new (p: Position, s: string) => any): IStatementRunnable;
export declare function star(first: IStatementRunnable): IStatementRunnable;
export declare function regex(r: RegExp): IStatementRunnable;
export declare function plus(first: IStatementRunnable): IStatementRunnable;
export declare function ver(version: Version, first: IStatementRunnable): IStatementRunnable;
export declare function verNot(version: Version, first: IStatementRunnable): IStatementRunnable;
