"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Uline extends _statement_1.Statement {
    getMatcher() {
        const right = combi_1.tok(tokens_1.ParenRightW);
        // todo, reuse the AT thing in ULINE and WRITE?
        const pos = combi_1.alt(combi_1.seq(combi_1.regex(/^(\/\d*|\d+)$/), combi_1.opt(combi_1.seq(combi_1.tok(tokens_1.ParenLeft), combi_1.regex(/^\d+$/), right))), combi_1.seq(combi_1.tok(tokens_1.WParenLeft), combi_1.regex(/^\d+$/), right));
        const dyn = combi_1.seq(combi_1.opt(combi_1.str("/")), new expressions_1.Dynamic());
        const ret = combi_1.seq(combi_1.str("ULINE"), combi_1.optPrio(combi_1.str("AT")), combi_1.opt(combi_1.alt(pos, dyn)));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Uline = Uline;
