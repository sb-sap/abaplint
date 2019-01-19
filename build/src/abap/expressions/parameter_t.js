"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
class ParameterT extends combi_1.Expression {
    getRunnable() {
        return combi_1.seq(new _1.ParameterName(), combi_1.str("="), new _1.Target());
    }
}
exports.ParameterT = ParameterT;
