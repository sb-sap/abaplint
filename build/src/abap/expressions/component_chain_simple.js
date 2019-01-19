"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require(".");
class ComponentChainSimple extends combi_1.Expression {
    getRunnable() {
        const chain = combi_1.seq(new _1.ComponentName(), combi_1.star(combi_1.seq(new _1.ArrowOrDash(), new _1.ComponentName())));
        //    const ret = seq(chain, optPrio(new FieldOffset()), optPrio(new FieldLength()));
        return chain;
    }
}
exports.ComponentChainSimple = ComponentChainSimple;
