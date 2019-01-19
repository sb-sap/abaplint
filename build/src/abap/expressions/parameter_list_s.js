"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
class ParameterListS extends combi_1.Expression {
    getRunnable() {
        return combi_1.plus(new _1.ParameterS());
    }
}
exports.ParameterListS = ParameterListS;
