"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LServer = require("vscode-languageserver-protocol");
const symbols_1 = require("./symbols");
const hover_1 = require("./hover");
const pretty_printer_1 = require("../abap/pretty_printer");
class LanguageServer {
    constructor(reg) {
        this.reg = reg;
    }
    documentSymbol(params) {
        return symbols_1.Symbols.find(this.reg, params.textDocument.uri);
    }
    hover(params) {
        const hover = hover_1.Hover.find(this.reg, params.textDocument.uri, params.position.line, params.position.character);
        if (hover) {
            return { contents: hover };
        }
        return undefined;
    }
    documentFormatting(params) {
        const file = this.reg.getABAPFile(params.textDocument.uri);
        if (file === undefined) {
            return [];
        }
        const text = new pretty_printer_1.PrettyPrinter(file).run();
        const tokens = file.getTokens();
        const last = tokens[tokens.length - 1];
        return [{
                range: LServer.Range.create(0, 0, last.getRow(), last.getCol() + last.getStr().length),
                newText: text,
            }];
    }
    diagnostics(_uri) {
        return []; // todo
    }
}
exports.LanguageServer = LanguageServer;
