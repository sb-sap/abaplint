"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class At extends _statement_1.Statement {
    getMatcher() {
        const field = combi_1.alt(combi_1.seq(new expressions_1.FieldSub(), combi_1.opt(new expressions_1.FieldOffset()), combi_1.opt(new expressions_1.FieldLength())), new expressions_1.Dynamic(), new expressions_1.FieldSymbol());
        const atNew = combi_1.seq(combi_1.str("NEW"), field);
        const atEnd = combi_1.seq(combi_1.str("END OF"), field);
        const group = combi_1.regex(/^\w+$/);
        const ret = combi_1.seq(combi_1.str("AT"), combi_1.alt(group, combi_1.str("FIRST"), combi_1.str("LAST"), atNew, atEnd));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.At = At;
