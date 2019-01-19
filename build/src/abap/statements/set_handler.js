"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class SetHandler extends _statement_1.Statement {
    getMatcher() {
        const activation = combi_1.seq(combi_1.str("ACTIVATION"), new expressions_1.Source());
        const fo = combi_1.seq(combi_1.str("FOR"), combi_1.alt(combi_1.str("ALL INSTANCES"), new expressions_1.Source()));
        const ret = combi_1.seq(combi_1.str("SET HANDLER"), combi_1.plus(new expressions_1.Target()), combi_1.opt(fo), combi_1.opt(activation));
        return ret;
    }
}
exports.SetHandler = SetHandler;
