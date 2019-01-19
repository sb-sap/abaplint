"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const _1 = require("./");
class FieldLength extends combi_1.Expression {
    getRunnable() {
        const normal = combi_1.seq(combi_1.opt(combi_1.tok(tokens_1.Plus)), combi_1.alt(combi_1.regex(/^[\d\w]+$/), new _1.FieldSymbol()), combi_1.opt(combi_1.seq(new _1.ArrowOrDash(), new _1.ComponentName())));
        const length = combi_1.seq(combi_1.tok(tokens_1.ParenLeft), combi_1.alt(normal, combi_1.str("*")), combi_1.tok(tokens_1.ParenRightW));
        return length;
    }
}
exports.FieldLength = FieldLength;
