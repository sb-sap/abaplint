"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LServer = require("vscode-languageserver-protocol");
class Symbols {
    static find(reg, uri) {
        const file = reg.getABAPFile(uri);
        if (file === undefined) {
            return [];
        }
        let ret = [];
        ret = ret.concat(this.outputClasses(file));
        ret = ret.concat(this.outputForms(file));
        return ret;
    }
    static selectionRange(identifier) {
        const pos = identifier.getPosition();
        const str = identifier.getName();
        return LServer.Range.create(pos.getRow() - 1, pos.getCol() - 1, pos.getRow() - 1, pos.getCol() - 1 + str.length);
    }
    static range(identifer) {
        const start = identifer.getStart();
        const end = identifer.getEnd();
        return LServer.Range.create(start.getRow() - 1, start.getCol() - 1, end.getRow() - 1, end.getCol() - 1);
    }
    static newSymbol(identifier, kind, children) {
        const symbol = {
            name: identifier.getName(),
            kind: kind,
            range: this.range(identifier),
            selectionRange: this.selectionRange(identifier),
            children,
        };
        return symbol;
    }
    static outputForms(file) {
        const ret = [];
        for (const form of file.getFormDefinitions()) {
            const symbol = this.newSymbol(form, LServer.SymbolKind.Function, []);
            ret.push(symbol);
        }
        return ret;
    }
    static outputClasses(file) {
        const ret = [];
        for (const cla of file.getClassDefinitions()) {
            let children = [];
            children = children.concat(this.outputClassAttributes(cla.getAttributes()));
            children = children.concat(this.outputMethodDefinitions(cla.getMethodDefinitions()));
            const symbol = this.newSymbol(cla, LServer.SymbolKind.Class, children);
            ret.push(symbol);
        }
        for (const cla of file.getClassImplementations()) {
            let children = [];
            children = children.concat(this.outputMethodImplementations(cla.getMethodImplementations()));
            const symbol = this.newSymbol(cla, LServer.SymbolKind.Class, children);
            ret.push(symbol);
        }
        return ret;
    }
    static outputMethodImplementations(methods) {
        const ret = [];
        for (const method of methods) {
            const symbol = this.newSymbol(method, LServer.SymbolKind.Method, []);
            ret.push(symbol);
        }
        return ret;
    }
    static outputClassAttributes(attr) {
        if (attr === undefined) {
            return [];
        }
        const ret = [];
        for (const id of attr.getStatic()) {
            ret.push(this.newSymbol(id, LServer.SymbolKind.Property, []));
        }
        for (const id of attr.getInstance()) {
            ret.push(this.newSymbol(id, LServer.SymbolKind.Property, []));
        }
        /* todo
        for (const id of attr.getConstants()) {
          ret.push(this.newSymbol(id, LServer.SymbolKind.Constant, []));
        }
        */
        return ret;
    }
    static outputMethodDefinitions(methods) {
        if (methods === undefined) {
            return [];
        }
        // todo
        return [];
    }
}
exports.Symbols = Symbols;
