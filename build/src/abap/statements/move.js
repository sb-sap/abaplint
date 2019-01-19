"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
const tokens_1 = require("../tokens");
class Move extends _statement_1.Statement {
    getMatcher() {
        const keeping = combi_1.ver(version_1.Version.v740sp05, combi_1.str("KEEPING TARGET LINES"));
        const expanding = combi_1.ver(version_1.Version.v740sp05, combi_1.str("EXPANDING NESTED TABLES"));
        const mov = combi_1.verNot(version_1.Version.Cloud, combi_1.str("MOVE"));
        const move = combi_1.seq(combi_1.alt(mov, combi_1.str("MOVE-CORRESPONDING")), combi_1.opt(combi_1.str("EXACT")), new expressions_1.Source(), combi_1.alt(combi_1.str("TO"), combi_1.str("?TO")), new expressions_1.Target(), combi_1.opt(expanding), combi_1.opt(keeping));
        const calcAssign = combi_1.ver(version_1.Version.Cloud, combi_1.alt(combi_1.seq(combi_1.tok(tokens_1.WPlus), combi_1.str("=")), combi_1.seq(combi_1.tok(tokens_1.WDash), combi_1.str("=")), combi_1.str("/="), combi_1.str("*=")));
        const equals = combi_1.alt(combi_1.alt(combi_1.str("="), combi_1.str("?=")), calcAssign);
        // todo, move "?=" to CAST?
        const eq = combi_1.seq(combi_1.plus(combi_1.seq(new expressions_1.Target(), equals)), new expressions_1.Source());
        return combi_1.alt(move, eq);
    }
}
exports.Move = Move;
