"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Static extends _statement_1.Statement {
    getMatcher() {
        const p = combi_1.opt(combi_1.per(new expressions_1.Type(), new expressions_1.Value(), new expressions_1.Length()));
        const type = combi_1.seq(combi_1.opt(new expressions_1.FieldLength()), p);
        const ret = combi_1.seq(combi_1.alt(combi_1.str("STATIC"), combi_1.str("STATICS")), new expressions_1.NamespaceSimpleName(), combi_1.alt(type, new expressions_1.TypeTable()));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Static = Static;
