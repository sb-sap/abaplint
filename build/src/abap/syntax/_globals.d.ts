import { TypedIdentifier } from "../types/_typed_identifier";
import { IFile } from "../../files/_ifile";
export declare class Globals {
    static get(): TypedIdentifier[];
    static typesInFile(file: IFile): TypedIdentifier[];
}
