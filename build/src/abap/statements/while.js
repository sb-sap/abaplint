"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class While extends _statement_1.Statement {
    getMatcher() {
        const vary = combi_1.seq(combi_1.str("VARY"), new expressions_1.Target(), combi_1.str("FROM"), new expressions_1.Source(), combi_1.str("NEXT"), new expressions_1.Source());
        return combi_1.seq(combi_1.str("WHILE"), new expressions_1.Cond(), combi_1.opt(vary));
    }
}
exports.While = While;
