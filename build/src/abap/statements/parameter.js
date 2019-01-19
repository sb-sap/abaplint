"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Parameter extends _statement_1.Statement {
    getMatcher() {
        const para = combi_1.alt(combi_1.str("PARAMETER"), combi_1.str("PARAMETERS"));
        const def = combi_1.seq(combi_1.str("DEFAULT"), combi_1.alt(new expressions_1.Constant(), new expressions_1.FieldChain()));
        const radio = combi_1.seq(combi_1.str("RADIOBUTTON GROUP"), new expressions_1.RadioGroupName());
        const type = combi_1.seq(combi_1.alt(combi_1.str("TYPE"), combi_1.str("LIKE")), combi_1.alt(new expressions_1.FieldChain(), new expressions_1.Dynamic()));
        const memory = combi_1.seq(combi_1.str("MEMORY ID"), new expressions_1.FieldSub());
        const listbox = combi_1.str("AS LISTBOX");
        const cmd = combi_1.seq(combi_1.str("USER-COMMAND"), combi_1.regex(/^\w+$/));
        const modif = combi_1.seq(combi_1.str("MODIF ID"), new expressions_1.Modif());
        const visible = combi_1.seq(combi_1.str("VISIBLE LENGTH"), new expressions_1.Constant());
        const length = combi_1.seq(combi_1.str("LENGTH"), new expressions_1.Constant());
        const match = combi_1.seq(combi_1.str("MATCHCODE OBJECT"), new expressions_1.Field());
        const decimals = combi_1.seq(combi_1.str("DECIMALS"), new expressions_1.Source());
        const perm = combi_1.per(type, def, combi_1.str("OBLIGATORY"), match, cmd, length, decimals, radio, memory, modif, listbox, visible, combi_1.str("VALUE CHECK"), combi_1.str("NO-DISPLAY"), combi_1.str("AS CHECKBOX"), combi_1.str("LOWER CASE"));
        const ret = combi_1.seq(para, new expressions_1.FieldSub(), combi_1.opt(new expressions_1.FieldLength()), combi_1.opt(perm));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Parameter = Parameter;
