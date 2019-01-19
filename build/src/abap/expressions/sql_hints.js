"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const constant_1 = require("./constant");
class SQLHints extends combi_1.Expression {
    getRunnable() {
        const ret = combi_1.seq(combi_1.str("%_HINTS"), combi_1.plus(combi_1.seq(combi_1.str("ORACLE"), new constant_1.Constant())));
        return ret;
    }
}
exports.SQLHints = SQLHints;
