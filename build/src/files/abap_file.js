"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokens_1 = require("../abap/tokens");
const _abstract_file_1 = require("./_abstract_file");
const Structures = require("../abap/structures");
const types_1 = require("../abap/types");
class ABAPFile extends _abstract_file_1.AbstractFile {
    constructor(file, tokens, statements) {
        super(file.getFilename());
        this.file = file;
        this.tokens = tokens;
        this.statements = statements;
    }
    getRaw() {
        return this.file.getRaw();
    }
    getRawRows() {
        return this.file.getRawRows();
    }
    setStructure(node) {
        this.structure = node;
    }
    getStructure() {
        return this.structure;
    }
    getTokens(withPragmas = true) {
        if (withPragmas === true) {
            return this.tokens;
        }
        else {
            const tokens = [];
            this.tokens.forEach((t) => {
                if (!(t instanceof tokens_1.Pragma)) {
                    tokens.push(t);
                }
            });
            return tokens;
        }
    }
    getStatements() {
        return this.statements;
    }
    setStatements(s) {
        this.statements = s;
    }
    // **************************
    getInterfaceDefinitions() {
        if (this.structure === undefined) {
            return [];
        }
        const ret = [];
        for (const found of this.structure.findAllStructures(Structures.Interface)) {
            ret.push(new types_1.InterfaceDefinition(found));
        }
        return ret;
    }
    getClassDefinitions() {
        if (this.structure === undefined) {
            return [];
        }
        const ret = [];
        for (const found of this.structure.findAllStructures(Structures.ClassDefinition)) {
            ret.push(new types_1.ClassDefinition(found));
        }
        return ret;
    }
    getClassDefinition(name) {
        for (const def of this.getClassDefinitions()) {
            if (def.getName().toUpperCase() === name.toUpperCase()) {
                return def;
            }
        }
        return undefined;
    }
    getClassImplementations() {
        if (this.structure === undefined) {
            return [];
        }
        const ret = [];
        for (const found of this.structure.findAllStructures(Structures.ClassImplementation)) {
            ret.push(new types_1.ClassImplementation(found));
        }
        return ret;
    }
    getFormDefinitions() {
        if (this.structure === undefined) {
            return [];
        }
        const ret = [];
        for (const found of this.structure.findAllStructures(Structures.Form)) {
            ret.push(new types_1.FormDefinition(found));
        }
        return ret;
    }
    getFormDefinition(name) {
        for (const def of this.getFormDefinitions()) {
            if (def.getName().toUpperCase() === name.toUpperCase()) {
                return def;
            }
        }
        return undefined;
    }
}
exports.ABAPFile = ABAPFile;
