"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
class FunctionName extends combi_1.Expression {
    getRunnable() {
        return combi_1.alt(new _1.Constant(), new _1.FieldChain());
    }
}
exports.FunctionName = FunctionName;
