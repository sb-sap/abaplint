"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class LogPoint extends _statement_1.Statement {
    getMatcher() {
        const subkey = combi_1.seq(combi_1.str("SUBKEY"), new expressions_1.Source());
        const fields = combi_1.seq(combi_1.str("FIELDS"), combi_1.plus(new expressions_1.Source()));
        const ret = combi_1.seq(combi_1.str("LOG-POINT ID"), new expressions_1.NamespaceSimpleName(), combi_1.opt(subkey), combi_1.opt(fields));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.LogPoint = LogPoint;
