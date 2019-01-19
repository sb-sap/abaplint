"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Translate extends _statement_1.Statement {
    getMatcher() {
        const cas = combi_1.seq(combi_1.str("TO"), combi_1.alt(combi_1.str("UPPER"), combi_1.str("LOWER")), combi_1.str("CASE"));
        const using = combi_1.seq(combi_1.str("USING"), new expressions_1.Source());
        return combi_1.seq(combi_1.str("TRANSLATE"), new expressions_1.Target(), combi_1.alt(cas, using));
    }
}
exports.Translate = Translate;
