"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
class Message extends _statement_1.Statement {
    getMatcher() {
        const like = combi_1.seq(combi_1.str("DISPLAY LIKE"), new expressions_1.Source());
        const into = combi_1.seq(combi_1.str("INTO"), new expressions_1.Target());
        //    const li = alt(like, into);  // todo, only this is allowed
        const raising = combi_1.seq(combi_1.str("RAISING"), new expressions_1.Field());
        const options = combi_1.per(like, into, raising);
        const type = combi_1.seq(combi_1.str("TYPE"), new expressions_1.Source());
        const sou = combi_1.altPrio(options, new expressions_1.Source());
        const sourc = combi_1.alt(sou, combi_1.seq(new expressions_1.Source(), sou), combi_1.seq(new expressions_1.Source(), new expressions_1.Source(), sou), combi_1.seq(new expressions_1.Source(), new expressions_1.Source(), new expressions_1.Source(), options));
        const mwith = combi_1.seq(combi_1.str("WITH"), new expressions_1.Source(), combi_1.opt(sourc));
        const foo = combi_1.seq(new expressions_1.MessageSource(), combi_1.opt(options), combi_1.opt(mwith));
        const text = combi_1.seq(new expressions_1.Source(), type, combi_1.opt(like), combi_1.opt(raising));
        const ret = combi_1.seq(combi_1.str("MESSAGE"), combi_1.alt(foo, text));
        return ret;
    }
}
exports.Message = Message;
