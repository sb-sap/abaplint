"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
class Redefinition extends combi_1.Expression {
    getRunnable() {
        return combi_1.seq(combi_1.opt(combi_1.str("FINAL")), combi_1.str("REDEFINITION"));
    }
}
exports.Redefinition = Redefinition;
