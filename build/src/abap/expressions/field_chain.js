"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
const tokens_1 = require("../tokens");
const class_name_1 = require("./class_name");
class FieldChain extends combi_1.Expression {
    getRunnable() {
        const arrow = combi_1.alt(combi_1.tok(tokens_1.InstanceArrow), combi_1.tok(tokens_1.Dash));
        const chain = combi_1.seq(combi_1.optPrio(combi_1.plus(new _1.TableExpression())), combi_1.star(combi_1.seq(arrow, combi_1.alt(combi_1.str("*"), new _1.ComponentName()), combi_1.opt(combi_1.plus(new _1.TableExpression())))));
        const clas = combi_1.seq(new class_name_1.ClassName(), combi_1.tok(tokens_1.StaticArrow), new _1.ComponentName());
        const start = combi_1.alt(clas, new _1.Field(), new _1.FieldSymbol());
        const ret = combi_1.seq(start, chain, combi_1.optPrio(new _1.FieldOffset()), combi_1.optPrio(new _1.FieldLength()));
        return ret;
    }
}
exports.FieldChain = FieldChain;
