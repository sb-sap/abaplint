"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
class ConstantString extends combi_1.Expression {
    getRunnable() {
        const text = combi_1.seq(combi_1.tok(tokens_1.ParenLeft), combi_1.regex(/^\w{3}$/), combi_1.tok(tokens_1.ParenRightW));
        /*
        let constant = reg(/^('.*')|(`.*`)$/);
        let concat = seq(str("&"), constant);
        let stri = seq(constant, star(concat), opt(text));
        */
        const stri = combi_1.seq(combi_1.regex(/^('.*')|(`.*`)$/), combi_1.opt(text));
        return stri;
    }
}
exports.ConstantString = ConstantString;
