"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens");
class ArrowOrDash extends combi_1.Expression {
    getRunnable() {
        return combi_1.alt(combi_1.tok(tokens_1.InstanceArrow), combi_1.tok(tokens_1.StaticArrow), combi_1.tok(tokens_1.Dash));
    }
}
exports.ArrowOrDash = ArrowOrDash;
