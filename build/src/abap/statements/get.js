"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Get extends _statement_1.Statement {
    getMatcher() {
        const fields = combi_1.seq(combi_1.str("FIELDS"), combi_1.plus(new expressions_1.Field()));
        const options = combi_1.per(combi_1.str("LATE"), fields);
        const ret = combi_1.seq(combi_1.str("GET"), new expressions_1.Target(), combi_1.opt(options));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Get = Get;
