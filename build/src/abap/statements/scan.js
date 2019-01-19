"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Scan extends _statement_1.Statement {
    getMatcher() {
        const tokens = combi_1.seq(combi_1.str("TOKENS INTO"), new expressions_1.Target());
        const word = combi_1.seq(combi_1.str("WORD INTO"), new expressions_1.Target());
        const line = combi_1.seq(combi_1.str("LINE INTO"), new expressions_1.Target());
        const statements = combi_1.seq(combi_1.str("STATEMENTS INTO"), new expressions_1.Target());
        const levels = combi_1.seq(combi_1.str("LEVELS INTO"), new expressions_1.Target());
        const structures = combi_1.seq(combi_1.str("STRUCTURES INTO"), new expressions_1.Target());
        const include = combi_1.seq(combi_1.str("INCLUDE INTO"), new expressions_1.Target());
        const offset = combi_1.seq(combi_1.str("OFFSET INTO"), new expressions_1.Target());
        const enh = combi_1.seq(combi_1.str("ENHANCEMENTS INTO"), new expressions_1.Target());
        const enhO = combi_1.seq(combi_1.str("ENHANCEMENT OPTIONS INTO"), new expressions_1.Target());
        const keywords = combi_1.seq(combi_1.str("KEYWORDS FROM"), new expressions_1.Source());
        const pragmas = combi_1.seq(combi_1.str("WITH PRAGMAS"), new expressions_1.Source());
        const overflow = combi_1.seq(combi_1.str("OVERFLOW INTO"), new expressions_1.Target());
        const message = combi_1.seq(combi_1.str("MESSAGE INTO"), new expressions_1.Target());
        const includeProgram = combi_1.seq(combi_1.str("INCLUDE PROGRAM FROM"), new expressions_1.Source());
        const frame = combi_1.seq(combi_1.str("FRAME PROGRAM FROM"), new expressions_1.Source());
        const program = combi_1.seq(combi_1.str("PROGRAM FROM"), new expressions_1.Source());
        const from = combi_1.seq(combi_1.str("FROM"), new expressions_1.Source());
        const to = combi_1.seq(combi_1.str("TO"), new expressions_1.Source());
        const replacing = combi_1.seq(combi_1.str("REPLACING"), new expressions_1.Source());
        const id = combi_1.seq(combi_1.str("ID"), new expressions_1.Source(), combi_1.str("TABLE"), new expressions_1.Source());
        const ret = combi_1.seq(combi_1.str("SCAN ABAP-SOURCE"), new expressions_1.Source(), combi_1.per(tokens, levels, from, to, statements, structures, keywords, word, line, offset, overflow, message, includeProgram, include, frame, enhO, enh, program, replacing, combi_1.str("WITH ANALYSIS"), combi_1.str("WITH COMMENTS"), combi_1.str("WITH TYPE-POOLS"), combi_1.str("WITH INCLUDES"), combi_1.str("WITHOUT TRMAC"), combi_1.str("WITH DECLARATIONS"), combi_1.str("WITH BLOCKS"), combi_1.str("PRESERVING IDENTIFIER ESCAPING"), combi_1.str("WITH LIST TOKENIZATION"), combi_1.str("WITH EXPLICIT ENHANCEMENTS"), combi_1.str("WITH IMPLICIT ENHANCEMENTS"), combi_1.str("WITH INACTIVE ENHANCEMENTS"), pragmas, id));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Scan = Scan;
