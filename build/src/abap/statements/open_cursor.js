"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class OpenCursor extends _statement_1.Statement {
    getMatcher() {
        const ret = combi_1.seq(combi_1.str("OPEN CURSOR"), combi_1.optPrio(combi_1.str("WITH HOLD")), new expressions_1.Target(), combi_1.str("FOR"), new expressions_1.Select());
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.OpenCursor = OpenCursor;
