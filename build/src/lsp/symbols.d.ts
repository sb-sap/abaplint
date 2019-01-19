import * as LServer from "vscode-languageserver-protocol";
import { Registry } from "../registry";
export declare class Symbols {
    static find(reg: Registry, uri: string): LServer.DocumentSymbol[];
    private static selectionRange;
    private static range;
    private static newSymbol;
    private static outputForms;
    private static outputClasses;
    private static outputMethodImplementations;
    private static outputClassAttributes;
    private static outputMethodDefinitions;
}
