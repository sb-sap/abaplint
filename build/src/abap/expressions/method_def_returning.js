"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require(".");
class MethodDefReturning extends combi_1.Expression {
    getRunnable() {
        return combi_1.seq(combi_1.str("RETURNING"), new _1.MethodParam());
    }
}
exports.MethodDefReturning = MethodDefReturning;
