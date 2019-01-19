"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
class ArithOperator extends combi_1.Expression {
    getRunnable() {
        const ret = combi_1.alt(combi_1.tok(tokens_1.WPlusW), combi_1.tok(tokens_1.WDashW), combi_1.str("*"), combi_1.str("**"), combi_1.str("/"), combi_1.str("BIT-XOR"), combi_1.str("BIT-AND"), combi_1.str("BIT-OR"), combi_1.str("DIV"), combi_1.str("MOD"));
        return ret;
    }
}
exports.ArithOperator = ArithOperator;
