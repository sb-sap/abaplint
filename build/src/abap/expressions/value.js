"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
class Value extends combi_1.Expression {
    getRunnable() {
        const ret = combi_1.seq(combi_1.str("VALUE"), combi_1.alt(new _1.Source(), combi_1.str("IS INITIAL")));
        return ret;
    }
}
exports.Value = Value;
