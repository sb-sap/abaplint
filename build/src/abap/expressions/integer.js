"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
class Integer extends combi_1.Expression {
    getRunnable() {
        return combi_1.seq(combi_1.opt(combi_1.alt(combi_1.tok(tokens_1.WDash), combi_1.tok(tokens_1.WPlus))), combi_1.regex(/^\d+$/));
    }
}
exports.Integer = Integer;
