"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Form extends _statement_1.Statement {
    getMatcher() {
        const resume = combi_1.seq(combi_1.str("RESUMABLE"), combi_1.tok(tokens_1.ParenLeft), new expressions_1.ClassName(), combi_1.tok(tokens_1.ParenRightW));
        const stru = combi_1.seq(new expressions_1.SimpleName(), combi_1.str("STRUCTURE"), new expressions_1.NamespaceSimpleName());
        const tables = combi_1.seq(combi_1.str("TABLES"), combi_1.plus(combi_1.altPrio(stru, new expressions_1.FormParam())));
        const using = combi_1.seq(combi_1.str("USING"), combi_1.plus(new expressions_1.FormParam()));
        const changing = combi_1.seq(combi_1.str("CHANGING"), combi_1.plus(new expressions_1.FormParam()));
        const raising = combi_1.seq(combi_1.str("RAISING"), combi_1.plus(combi_1.alt(new expressions_1.ClassName(), resume)));
        const ret = combi_1.seq(combi_1.str("FORM"), new expressions_1.FormName(), combi_1.opt(tables), combi_1.opt(using), combi_1.opt(changing), combi_1.opt(raising));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Form = Form;
