"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class SyntaxCheck extends _statement_1.Statement {
    getMatcher() {
        const program = combi_1.seq(combi_1.str("PROGRAM"), new expressions_1.Source());
        const offset = combi_1.seq(combi_1.str("OFFSET"), new expressions_1.Target());
        const frame = combi_1.seq(combi_1.str("FRAME ENTRY"), new expressions_1.Target());
        const include = combi_1.seq(combi_1.str("INCLUDE"), new expressions_1.Target());
        const trace = combi_1.seq(combi_1.str("TRACE-TABLE"), new expressions_1.Target());
        const line = combi_1.seq(combi_1.str("LINE"), new expressions_1.Target());
        const word = combi_1.seq(combi_1.str("WORD"), new expressions_1.Target());
        const messageId = combi_1.seq(combi_1.str("MESSAGE-ID"), new expressions_1.Target());
        const message = combi_1.seq(combi_1.str("MESSAGE"), new expressions_1.Target());
        const id = combi_1.seq(combi_1.str("ID"), new expressions_1.Source(), combi_1.str("TABLE"), new expressions_1.Target());
        const replacing = combi_1.seq(combi_1.str("REPLACING"), new expressions_1.Target());
        const directory = combi_1.seq(combi_1.str("DIRECTORY ENTRY"), new expressions_1.Source());
        const dump = combi_1.seq(combi_1.str("SHORTDUMP-ID"), new expressions_1.Source());
        const syntax = combi_1.seq(combi_1.opt(combi_1.str("PROGRAM")), new expressions_1.Source(), combi_1.per(message, line, word, offset, program, replacing, directory, frame, include, messageId, trace, dump, combi_1.plus(id)));
        const dynpro = combi_1.seq(combi_1.str("DYNPRO"), new expressions_1.Source(), new expressions_1.Source(), new expressions_1.Source(), new expressions_1.Source(), combi_1.per(message, line, word, offset, messageId));
        const ret = combi_1.seq(combi_1.str("SYNTAX-CHECK FOR"), combi_1.alt(syntax, dynpro));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.SyntaxCheck = SyntaxCheck;
