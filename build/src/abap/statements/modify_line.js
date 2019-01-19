"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class ModifyLine extends _statement_1.Statement {
    getMatcher() {
        const form = combi_1.seq(combi_1.alt(combi_1.str("INVERSE"), combi_1.str("INPUT")), combi_1.str("="), new expressions_1.Source());
        const value = combi_1.seq(combi_1.str("FIELD VALUE"), combi_1.plus(new expressions_1.Source()));
        const format = combi_1.seq(combi_1.str("FIELD FORMAT"), new expressions_1.Source(), combi_1.opt(form));
        const from = combi_1.seq(combi_1.str("FROM"), new expressions_1.Source());
        const lineValue = combi_1.seq(combi_1.str("LINE VALUE FROM"), new expressions_1.Source());
        const index = combi_1.seq(combi_1.str("INDEX"), new expressions_1.Source());
        const page = combi_1.seq(combi_1.str("OF PAGE"), new expressions_1.Source());
        const ocp = combi_1.str("OF CURRENT PAGE");
        const lineFormat = combi_1.seq(combi_1.str("LINE FORMAT"), combi_1.alt(combi_1.str("INPUT OFF"), combi_1.str("RESET"), combi_1.str("INTENSIFIED")));
        const onOff = combi_1.alt(combi_1.str("ON"), combi_1.str("OFF"));
        const intensified = combi_1.seq(combi_1.str("INTENSIFIED"), onOff);
        const color = combi_1.seq(combi_1.str("COLOR"), new expressions_1.Source());
        const options = combi_1.per(index, value, from, format, page, lineFormat, lineValue, ocp, intensified, color);
        const ret = combi_1.seq(combi_1.str("MODIFY"), combi_1.alt(combi_1.str("CURRENT LINE"), combi_1.seq(combi_1.str("LINE"), new expressions_1.Source())), combi_1.opt(options));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.ModifyLine = ModifyLine;
