"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class FetchNext extends _statement_1.Statement {
    getMatcher() {
        const size = combi_1.seq(combi_1.str("PACKAGE SIZE"), new expressions_1.Source());
        const table = combi_1.seq(combi_1.alt(combi_1.str("INTO"), combi_1.str("APPENDING")), combi_1.opt(combi_1.str("CORRESPONDING FIELDS OF")), combi_1.str("TABLE"), new expressions_1.Target());
        const record = combi_1.seq(combi_1.str("INTO"), combi_1.opt(combi_1.str("CORRESPONDING FIELDS OF")), new expressions_1.Target());
        const ret = combi_1.seq(combi_1.str("FETCH NEXT CURSOR"), new expressions_1.Source(), combi_1.alt(record, table), combi_1.opt(size));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.FetchNext = FetchNext;
