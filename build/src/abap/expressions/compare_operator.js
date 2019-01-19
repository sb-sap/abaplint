"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
class CompareOperator extends combi_1.Expression {
    getRunnable() {
        const operator = combi_1.seq(combi_1.opt(combi_1.str("NOT")), combi_1.alt(combi_1.str("="), combi_1.str("<>"), combi_1.str("><"), combi_1.str("<"), combi_1.str(">"), combi_1.str("<="), combi_1.str(">="), combi_1.str("=>"), combi_1.str("=<"), combi_1.str("CA"), combi_1.str("CO"), combi_1.str("CP"), combi_1.str("EQ"), combi_1.str("NE"), combi_1.str("CN"), combi_1.str("GE"), combi_1.str("GT"), combi_1.str("LT"), combi_1.str("LE"), combi_1.str("CS"), combi_1.str("NS"), combi_1.str("NA"), combi_1.str("NP"), combi_1.str("BYTE-CO"), combi_1.str("BYTE-CA"), combi_1.str("BYTE-CS"), combi_1.str("BYTE-CN"), combi_1.str("BYTE-NA"), combi_1.str("BYTE-NS"), combi_1.str("O"), // hex comparison operator
        combi_1.str("Z"), // hex comparison operator
        combi_1.str("M")));
        return operator;
    }
}
exports.CompareOperator = CompareOperator;
