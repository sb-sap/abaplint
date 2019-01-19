"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const _1 = require("./");
const version_1 = require("../../version");
class TableExpression extends combi_1.Expression {
    getRunnable() {
        const fields = combi_1.plus(combi_1.seq(new _1.ComponentChainSimple(), combi_1.str("="), new _1.Source()));
        const key = combi_1.seq(combi_1.str("KEY"), new _1.SimpleName());
        const ret = combi_1.seq(combi_1.tok(tokens_1.BracketLeftW), combi_1.alt(new _1.Source(), combi_1.seq(combi_1.opt(key), combi_1.opt(combi_1.str("COMPONENTS")), fields)), combi_1.alt(combi_1.tok(tokens_1.WBracketRight), combi_1.tok(tokens_1.WBracketRightW)));
        return combi_1.ver(version_1.Version.v740sp02, ret);
    }
}
exports.TableExpression = TableExpression;
