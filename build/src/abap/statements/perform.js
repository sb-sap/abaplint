"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Perform extends _statement_1.Statement {
    getMatcher() {
        const programName = new expressions_1.Field();
        const using = combi_1.seq(combi_1.str("USING"), combi_1.plus(new expressions_1.Source()));
        const tables = combi_1.seq(combi_1.str("TABLES"), combi_1.plus(new expressions_1.Source()));
        const changing = combi_1.seq(combi_1.str("CHANGING"), combi_1.plus(new expressions_1.Source()));
        const level = combi_1.seq(combi_1.str("LEVEL"), new expressions_1.Source());
        const commit = combi_1.alt(combi_1.seq(combi_1.str("ON COMMIT"), combi_1.opt(level)), combi_1.str("ON ROLLBACK"));
        const short = combi_1.seq(new expressions_1.FormName(), combi_1.tok(tokens_1.ParenLeft), programName, combi_1.tok(tokens_1.ParenRightW));
        const program = combi_1.seq(combi_1.str("IN PROGRAM"), combi_1.opt(combi_1.alt(new expressions_1.Dynamic(), programName)));
        const found = combi_1.str("IF FOUND");
        const full = combi_1.seq(combi_1.alt(new expressions_1.FormName(), new expressions_1.Dynamic()), combi_1.opt(program));
        const ret = combi_1.seq(combi_1.str("PERFORM"), combi_1.per(combi_1.alt(short, full), found), combi_1.opt(tables), combi_1.opt(using), combi_1.opt(changing), combi_1.opt(found), combi_1.opt(commit));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Perform = Perform;
