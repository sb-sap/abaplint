"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
class ClassGlobal extends combi_1.Expression {
    getRunnable() {
        return combi_1.str("PUBLIC");
    }
}
exports.ClassGlobal = ClassGlobal;
