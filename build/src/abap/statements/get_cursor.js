"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class GetCursor extends _statement_1.Statement {
    getMatcher() {
        const line = combi_1.seq(combi_1.str("LINE"), new expressions_1.Target());
        const field = combi_1.seq(combi_1.str("FIELD"), new expressions_1.Target());
        const offset = combi_1.seq(combi_1.str("OFFSET"), new expressions_1.Target());
        const value = combi_1.seq(combi_1.str("VALUE"), new expressions_1.Target());
        const length = combi_1.seq(combi_1.str("LENGTH"), new expressions_1.Target());
        const area = combi_1.seq(combi_1.str("AREA"), new expressions_1.Target());
        const ret = combi_1.seq(combi_1.str("GET CURSOR"), combi_1.per(line, combi_1.opt(combi_1.str("DISPLAY")), field, offset, value, length, area));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.GetCursor = GetCursor;
