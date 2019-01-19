import { IFile } from "./files/_ifile";
import { Position } from "./position";
interface IssueData {
    file: IFile;
    message: string;
    key: string;
    start?: Position;
    end?: Position;
}
export declare class Issue {
    private start;
    private end;
    private file;
    private message;
    private key;
    constructor(data: IssueData);
    getMessage(): string;
    getKey(): string;
    getStart(): Position;
    getEnd(): Position;
    getFile(): IFile;
}
export {};
