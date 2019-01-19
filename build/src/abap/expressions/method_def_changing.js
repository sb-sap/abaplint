"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require(".");
class MethodDefChanging extends combi_1.Expression {
    getRunnable() {
        return combi_1.seq(combi_1.str("CHANGING"), combi_1.plus(combi_1.seq(new _1.MethodParam(), combi_1.opt(combi_1.str("OPTIONAL")))));
    }
}
exports.MethodDefChanging = MethodDefChanging;
