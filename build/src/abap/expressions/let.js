"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
class Let extends combi_1.Expression {
    getRunnable() {
        const fieldList = combi_1.seq(new _1.FieldSub(), combi_1.str("="), new _1.Source());
        return combi_1.seq(combi_1.str("LET"), combi_1.plus(fieldList), combi_1.str("IN"));
    }
}
exports.Let = Let;
