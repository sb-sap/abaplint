"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
const _2 = require("./");
const tokens_1 = require("../tokens/");
class Target extends combi_1.Expression {
    getRunnable() {
        const clas = combi_1.seq(new _1.ClassName(), combi_1.tok(tokens_1.StaticArrow), new _1.ComponentName());
        const start = combi_1.alt(clas, new _1.Field(), new _2.FieldSymbol());
        const arrow = combi_1.alt(combi_1.tok(tokens_1.InstanceArrow), combi_1.tok(tokens_1.Dash));
        const after = combi_1.seq(start, combi_1.star(new _1.TableExpression()), combi_1.star(combi_1.seq(arrow, combi_1.alt(combi_1.str("*"), new _1.FieldAll()), combi_1.star(new _1.TableExpression()))));
        const fields = combi_1.seq(combi_1.opt(new _1.FieldOffset()), combi_1.opt(new _1.FieldLength()));
        const ref = combi_1.seq(combi_1.tok(tokens_1.InstanceArrow), combi_1.str("*"));
        const optional = combi_1.alt(new _1.TableBody(), fields, ref);
        return combi_1.altPrio(new _2.InlineData(), new _2.InlineFS(), combi_1.seq(after, optional));
    }
}
exports.Target = Target;
