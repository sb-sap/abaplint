"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
class TableBody extends combi_1.Expression {
    getRunnable() {
        const ret = combi_1.seq(combi_1.tok(tokens_1.BracketLeft), combi_1.tok(tokens_1.BracketRightW));
        return ret;
    }
}
exports.TableBody = TableBody;
