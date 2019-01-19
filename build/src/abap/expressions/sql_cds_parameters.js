"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require(".");
const tokens_1 = require("../tokens/");
const constant_1 = require("./constant");
class SQLCDSParameters extends combi_1.Expression {
    getRunnable() {
        const param = combi_1.seq(new _1.Field(), combi_1.str("="), combi_1.alt(combi_1.seq(combi_1.tok(tokens_1.WAt), new _1.Field()), new constant_1.Constant()));
        return combi_1.seq(combi_1.str("("), param, combi_1.star(combi_1.seq(combi_1.str(","), param)), combi_1.str(")"));
    }
}
exports.SQLCDSParameters = SQLCDSParameters;
