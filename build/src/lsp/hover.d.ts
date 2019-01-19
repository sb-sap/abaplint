import * as LServer from "vscode-languageserver-protocol";
import { Registry } from "../registry";
export declare class Hover {
    static find(reg: Registry, uri: string, line: number, character: number): LServer.MarkupContent | undefined;
    private static fullPath;
    private static traverse;
}
