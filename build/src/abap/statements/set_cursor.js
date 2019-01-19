"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class SetCursor extends _statement_1.Statement {
    getMatcher() {
        const line = combi_1.seq(combi_1.str("LINE"), new expressions_1.Source());
        const offset = combi_1.seq(combi_1.str("OFFSET"), new expressions_1.Source());
        const field = combi_1.seq(combi_1.str("FIELD"), new expressions_1.Source());
        const pos = combi_1.seq(new expressions_1.Source(), new expressions_1.Source());
        const ret = combi_1.seq(combi_1.str("SET CURSOR"), combi_1.altPrio(combi_1.seq(field, combi_1.opt(offset), combi_1.opt(line)), pos));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.SetCursor = SetCursor;
