"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class SelectOption extends _statement_1.Statement {
    getMatcher() {
        const sourc = combi_1.alt(new expressions_1.Constant(), new expressions_1.FieldChain());
        const to = combi_1.seq(combi_1.str("TO"), sourc);
        const def = combi_1.seq(combi_1.str("DEFAULT"), sourc, combi_1.opt(to));
        const option = combi_1.seq(combi_1.str("OPTION"), new expressions_1.Field());
        const sign = combi_1.seq(combi_1.str("SIGN"), new expressions_1.Field());
        const memory = combi_1.seq(combi_1.str("MEMORY ID"), new expressions_1.Field());
        const match = combi_1.seq(combi_1.str("MATCHCODE OBJECT"), new expressions_1.Field());
        const modif = combi_1.seq(combi_1.str("MODIF ID"), new expressions_1.Modif());
        const visible = combi_1.seq(combi_1.str("VISIBLE LENGTH"), new expressions_1.Source());
        const options = combi_1.per(def, option, sign, memory, match, visible, modif, combi_1.str("NO DATABASE SELECTION"), combi_1.str("LOWER CASE"), combi_1.str("NO-EXTENSION"), combi_1.str("NO INTERVALS"), combi_1.str("NO-DISPLAY"), combi_1.str("OBLIGATORY"));
        const ret = combi_1.seq(combi_1.str("SELECT-OPTIONS"), new expressions_1.Field(), combi_1.str("FOR"), combi_1.alt(new expressions_1.FieldChain(), new expressions_1.Dynamic()), combi_1.opt(options));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.SelectOption = SelectOption;
