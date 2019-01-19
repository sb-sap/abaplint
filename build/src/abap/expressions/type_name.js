"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
class TypeName extends combi_1.Expression {
    getRunnable() {
        const name = combi_1.regex(/^[\w~\/%]+$/);
        const cla = combi_1.seq(name, combi_1.alt(combi_1.tok(tokens_1.StaticArrow), combi_1.tok(tokens_1.InstanceArrow)));
        const field = combi_1.seq(combi_1.tok(tokens_1.Dash), name);
        return combi_1.alt(combi_1.seq(combi_1.opt(cla), name, combi_1.opt(field)), combi_1.str("#"));
    }
}
exports.TypeName = TypeName;
