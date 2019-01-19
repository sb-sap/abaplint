"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
class ClassFinal extends combi_1.Expression {
    getRunnable() {
        return combi_1.str("FINAL");
    }
}
exports.ClassFinal = ClassFinal;
