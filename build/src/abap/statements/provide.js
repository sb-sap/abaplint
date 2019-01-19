"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Provide extends _statement_1.Statement {
    getMatcher() {
        const list = combi_1.str("*");
        const fields = combi_1.seq(combi_1.str("FIELDS"), list, combi_1.str("FROM"), new expressions_1.Source(), combi_1.str("INTO"), new expressions_1.Target(), combi_1.str("VALID"), new expressions_1.Field(), combi_1.str("BOUNDS"), new expressions_1.Field(), combi_1.str("AND"), new expressions_1.Field());
        const ret = combi_1.seq(combi_1.str("PROVIDE"), combi_1.plus(fields), combi_1.str("BETWEEN"), new expressions_1.Field(), combi_1.str("AND"), new expressions_1.Field());
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Provide = Provide;
