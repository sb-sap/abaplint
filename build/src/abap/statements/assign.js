"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const expressions_1 = require("../expressions");
class Assign extends _statement_1.Statement {
    getMatcher() {
        const component = combi_1.seq(combi_1.str("COMPONENT"), new expressions_1.Source(), combi_1.str("OF STRUCTURE"), new expressions_1.Source());
        const tableField = combi_1.seq(combi_1.str("TABLE FIELD"), new expressions_1.Dynamic());
        const arrow = combi_1.alt(combi_1.tok(tokens_1.InstanceArrow), combi_1.tok(tokens_1.StaticArrow));
        const source = combi_1.alt(combi_1.seq(new expressions_1.Source(), combi_1.opt(combi_1.seq(arrow, new expressions_1.Dynamic()))), component, tableField, combi_1.seq(new expressions_1.Dynamic(), combi_1.opt(combi_1.seq(arrow, combi_1.alt(new expressions_1.Field(), new expressions_1.Dynamic())))));
        const type = combi_1.seq(combi_1.str("TYPE"), combi_1.alt(new expressions_1.Dynamic(), new expressions_1.Source()));
        const like = combi_1.seq(combi_1.str("LIKE"), combi_1.alt(new expressions_1.Dynamic(), new expressions_1.Source()));
        const handle = combi_1.seq(combi_1.str("TYPE HANDLE"), new expressions_1.Source());
        const range = combi_1.seq(combi_1.str("RANGE"), new expressions_1.Source());
        const decimals = combi_1.seq(combi_1.str("DECIMALS"), new expressions_1.Source());
        const casting = combi_1.seq(combi_1.opt(combi_1.str("CASTING")), combi_1.opt(combi_1.alt(like, handle, combi_1.per(type, decimals))));
        const ret = combi_1.seq(combi_1.str("ASSIGN"), combi_1.opt(combi_1.seq(new expressions_1.Target(), combi_1.str("INCREMENT"))), source, combi_1.str("TO"), new expressions_1.FSTarget(), casting, combi_1.opt(range));
        return ret;
    }
}
exports.Assign = Assign;
