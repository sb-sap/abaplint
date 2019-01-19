"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
class Decimals extends combi_1.Expression {
    getRunnable() {
        const ret = combi_1.seq(combi_1.str("DECIMALS"), new _1.Integer());
        return ret;
    }
}
exports.Decimals = Decimals;
