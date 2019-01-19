"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
class Type extends combi_1.Expression {
    getRunnable() {
        const likeType = combi_1.alt(combi_1.str("LIKE"), combi_1.str("TYPE"));
        // todo, DEFAULT is only valid for definitions in relation to method parameters
        const def = combi_1.seq(combi_1.str("DEFAULT"), combi_1.alt(new _1.Constant(), new _1.FieldChain()));
        const type = combi_1.seq(likeType, combi_1.opt(combi_1.alt(combi_1.str("LINE OF"), combi_1.str("REF TO"))));
        const ret = combi_1.seq(type, new _1.FieldChain(), combi_1.opt(new _1.TableBody()), combi_1.opt(def));
        return ret;
    }
}
exports.Type = Type;
