"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _abstract_object_1 = require("./_abstract_object");
const files_1 = require("../files");
const lexer_1 = require("../abap/lexer");
const statement_parser_1 = require("../abap/statement_parser");
const structure_parser_1 = require("../abap/structure_parser");
const statements_1 = require("../abap/statements");
const nodes_1 = require("../abap/nodes/");
const _statement_1 = require("../abap/statements/_statement");
const tokens_1 = require("../abap/tokens");
class ABAPObject extends _abstract_object_1.AbstractObject {
    constructor(name) {
        super(name);
        this.parsed = [];
    }
    shouldParse() {
        // todo, this does not handle changing of version + macros
        if (this.parsed.length > 0 && this.isDirty() === false) {
            return false;
        }
        else {
            return true;
        }
    }
    parseFirstPass(ver, reg) {
        if (this.shouldParse() === false) {
            return;
        }
        this.parsed = [];
        this.files.forEach((f) => {
            if (/.*\.abap$/.test(f.getFilename())) {
                const tokens = lexer_1.Lexer.run(f);
                const statements = statement_parser_1.StatementParser.run(tokens, ver);
                this.parsed.push(new files_1.ABAPFile(f, tokens, statements));
            }
        });
        this.parsed.forEach((f) => {
            f.getStatements().forEach((s) => {
                if (s.get() instanceof statements_1.Define) {
                    // todo, will this break if first token is a pragma?
                    reg.addMacro(s.getTokens()[1].getStr());
                }
            });
        });
    }
    parseSecondPass(reg) {
        if (this.shouldParse() === false) {
            return this.old;
        }
        for (const f of this.parsed) {
            const statements = [];
            for (const s of f.getStatements()) {
                let name = undefined;
                if (s.get() instanceof _statement_1.Unknown) {
                    for (const i of s.getTokens()) {
                        if (i instanceof tokens_1.Identifier) {
                            name = i.getStr();
                            break;
                        }
                        else if (i instanceof tokens_1.Pragma) {
                            continue;
                        }
                        else {
                            break;
                        }
                    }
                }
                if (name && reg.isMacro(name)) {
                    statements.push(new nodes_1.StatementNode(new _statement_1.MacroCall()).setChildren(this.tokensToNodes(s.getTokens())));
                }
                else {
                    statements.push(s);
                }
            }
            f.setStatements(statements);
        }
        let ret = [];
        for (const f of this.parsed) {
            const result = structure_parser_1.StructureParser.run(f);
            f.setStructure(result.node);
            ret = ret.concat(result.issues);
        }
        this.dirty = false;
        this.old = ret;
        return ret;
    }
    getABAPFiles() {
        return this.parsed;
    }
    tokensToNodes(tokens) {
        const ret = [];
        tokens.forEach((t) => { ret.push(new nodes_1.TokenNode(t)); });
        return ret;
    }
}
exports.ABAPObject = ABAPObject;
