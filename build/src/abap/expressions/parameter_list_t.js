"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
class ParameterListT extends combi_1.Expression {
    getRunnable() {
        return combi_1.plus(new _1.ParameterT());
    }
}
exports.ParameterListT = ParameterListT;
