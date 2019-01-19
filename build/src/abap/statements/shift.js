"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Shift extends _statement_1.Statement {
    getMatcher() {
        const deleting = combi_1.seq(combi_1.str("DELETING"), combi_1.alt(combi_1.str("LEADING"), combi_1.str("TRAILING")), new expressions_1.Source());
        const up = combi_1.seq(combi_1.str("UP TO"), new expressions_1.Source());
        const mode = combi_1.seq(combi_1.str("IN"), combi_1.alt(combi_1.str("CHARACTER"), combi_1.str("BYTE")), combi_1.str("MODE"));
        const dir = combi_1.alt(combi_1.str("LEFT"), combi_1.str("RIGHT"));
        const by = combi_1.seq(combi_1.str("BY"), new expressions_1.Source(), combi_1.opt(combi_1.str("PLACES")));
        const options = combi_1.per(deleting, up, mode, dir, by, combi_1.str("CIRCULAR"));
        return combi_1.seq(combi_1.str("SHIFT"), new expressions_1.Target(), combi_1.opt(options));
    }
}
exports.Shift = Shift;
