"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
class ComponentChain extends combi_1.Expression {
    getRunnable() {
        const chain = combi_1.seq(new _1.ComponentName(), combi_1.optPrio(combi_1.plus(new _1.TableExpression())), combi_1.star(combi_1.seq(new _1.ArrowOrDash(), combi_1.alt(combi_1.str("*"), new _1.ComponentName()), combi_1.opt(combi_1.plus(new _1.TableExpression())))));
        const ret = combi_1.seq(chain, combi_1.optPrio(new _1.FieldOffset()), combi_1.optPrio(new _1.FieldLength()));
        return ret;
    }
}
exports.ComponentChain = ComponentChain;
