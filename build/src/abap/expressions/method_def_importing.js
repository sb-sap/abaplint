"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require(".");
class MethodDefImporting extends combi_1.Expression {
    getRunnable() {
        const field = combi_1.regex(/^!?(\/\w+\/)?\w+$/);
        return combi_1.seq(combi_1.str("IMPORTING"), combi_1.plus(combi_1.seq(new _1.MethodParam(), combi_1.opt(combi_1.str("OPTIONAL")))), combi_1.opt(combi_1.seq(combi_1.str("PREFERRED PARAMETER"), field)));
    }
}
exports.MethodDefImporting = MethodDefImporting;
