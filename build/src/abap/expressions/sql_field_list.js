"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require(".");
const version_1 = require("../../version");
const tokens_1 = require("../tokens/");
const constant_1 = require("./constant");
class SQLFieldList extends combi_1.Expression {
    getRunnable() {
        const comma = combi_1.opt(combi_1.ver(version_1.Version.v740sp05, combi_1.str(",")));
        const abap = combi_1.ver(version_1.Version.v740sp05, combi_1.seq(combi_1.tok(tokens_1.WAt), new _1.Field()));
        return combi_1.alt(combi_1.str("*"), new _1.Dynamic(), combi_1.plus(combi_1.alt(combi_1.seq(combi_1.alt(new _1.Field(), abap, new constant_1.Constant()), comma), new _1.SQLAggregation())));
    }
}
exports.SQLFieldList = SQLFieldList;
