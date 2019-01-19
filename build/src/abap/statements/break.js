"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Break extends _statement_1.Statement {
    getMatcher() {
        const next = combi_1.str("AT NEXT APPLICATION STATEMENT");
        const log = new expressions_1.Source();
        const ret = combi_1.alt(combi_1.seq(combi_1.str("BREAK-POINT"), combi_1.opt(combi_1.alt(next, log))), combi_1.seq(combi_1.str("BREAK"), new expressions_1.Field()));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Break = Break;
