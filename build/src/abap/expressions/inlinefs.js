"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const _1 = require("./");
const version_1 = require("../../version");
class InlineFS extends combi_1.Expression {
    getRunnable() {
        const right = combi_1.tok(tokens_1.ParenRightW);
        const left = combi_1.tok(tokens_1.ParenLeft);
        const fs = combi_1.seq(combi_1.str("FIELD-SYMBOL"), left, new _1.FieldSymbol(), right);
        return combi_1.ver(version_1.Version.v740sp02, fs);
    }
}
exports.InlineFS = InlineFS;
