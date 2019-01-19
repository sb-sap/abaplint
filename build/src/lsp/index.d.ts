import * as LServer from "vscode-languageserver-protocol";
import { Registry } from "../registry";
export declare class LanguageServer {
    private reg;
    constructor(reg: Registry);
    documentSymbol(params: LServer.DocumentSymbolParams): LServer.DocumentSymbol[];
    hover(params: LServer.TextDocumentPositionParams): LServer.Hover | undefined;
    documentFormatting(params: LServer.DocumentFormattingParams): LServer.TextEdit[];
    diagnostics(_uri: string): LServer.Diagnostic[];
}
