import { Structure } from "./structures/_structure";
import { Expression } from "./combi";
import { Statement } from "./statements/_statement";
export interface IKeyword {
    word: string;
    source: string[];
}
export declare class Artifacts {
    static getStructures(): Structure[];
    static getExpressions(): Expression[];
    static getStatements(): Statement[];
    static getKeywords(): IKeyword[];
}
