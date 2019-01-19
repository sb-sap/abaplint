"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const _1 = require("./");
class FieldOffset extends combi_1.Expression {
    getRunnable() {
        const offset = combi_1.seq(combi_1.tok(tokens_1.Plus), 
        // todo, change this regex to Field?
        combi_1.alt(combi_1.regex(/^[\d\w]+$/), new _1.FieldSymbol()), combi_1.opt(combi_1.seq(new _1.ArrowOrDash(), new _1.ComponentName())));
        return offset;
    }
}
exports.FieldOffset = FieldOffset;
