"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
class IncludeName extends combi_1.Expression {
    getRunnable() {
        return combi_1.seq(combi_1.regex(/^<?(\/\w+\/)?\w+(~\w+)?>?$/), combi_1.opt(combi_1.seq(combi_1.tok(tokens_1.Dash), combi_1.regex(/^\w+$/))));
    }
}
exports.IncludeName = IncludeName;
