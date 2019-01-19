import { IFile } from "../files/_ifile";
import { Position } from "../position";
import { IObject } from "../objects/_iobject";
export interface IMethodLengthResult {
    name: string;
    count: number;
    file: IFile;
    pos: Position;
}
export declare class MethodLengthStats {
    static run(obj: IObject): IMethodLengthResult[];
    private static findName;
}
