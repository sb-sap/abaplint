import { IFile } from "../files/_ifile";
import { Token } from "./tokens/_token";
export declare class Lexer {
    private static tokens;
    private static m;
    private static stream;
    private static buffer;
    static run(file: IFile): Token[];
    private static add;
    private static process;
}
