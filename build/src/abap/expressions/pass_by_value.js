"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const _1 = require("./");
class PassByValue extends combi_1.Expression {
    getRunnable() {
        const value = combi_1.seq(combi_1.str("VALUE"), combi_1.tok(tokens_1.ParenLeft), new _1.Field(), combi_1.tok(tokens_1.ParenRightW));
        return value;
    }
}
exports.PassByValue = PassByValue;
