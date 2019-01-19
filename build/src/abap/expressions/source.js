"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const _1 = require("./");
const _2 = require("./");
const version_1 = require("../../version");
const _3 = require("./");
class Source extends combi_1.Expression {
    getRunnable() {
        const ref = combi_1.seq(combi_1.tok(tokens_1.InstanceArrow), combi_1.str("*"));
        const method = combi_1.seq(new _1.MethodCallChain(), combi_1.optPrio(combi_1.seq(new _2.ArrowOrDash(), new _3.ComponentChain())));
        const rparen = combi_1.tok(tokens_1.WParenRightW);
        // paren used for eg. "( 2 + 1 ) * 4"
        const paren = combi_1.seq(combi_1.tok(tokens_1.WParenLeftW), new Source(), rparen);
        const after = combi_1.seq(combi_1.alt(combi_1.str("&"), combi_1.str("&&"), new _1.ArithOperator()), new Source());
        const bool = combi_1.seq(combi_1.alt(combi_1.ver(version_1.Version.v702, combi_1.regex(/^BOOLC$/i)), combi_1.ver(version_1.Version.v740sp08, combi_1.regex(/^XSDBOOL$/i))), combi_1.tok(tokens_1.ParenLeftW), new _1.Cond(), combi_1.str(")"));
        const prefix = combi_1.alt(combi_1.tok(tokens_1.WDashW), combi_1.str("BIT-NOT"));
        const old = combi_1.seq(combi_1.alt(new _1.Constant(), new _1.StringTemplate(), bool, method, combi_1.seq(combi_1.opt(prefix), new _2.FieldChain()), paren), combi_1.optPrio(combi_1.alt(ref, after, new _2.TableBody())));
        const mapping = combi_1.seq(combi_1.str("MAPPING"), combi_1.plus(combi_1.seq(new _3.ComponentName(), combi_1.str("="), new _3.ComponentName())));
        const baseParen = combi_1.seq(combi_1.str("BASE"), combi_1.tok(tokens_1.WParenLeftW), new Source(), combi_1.tok(tokens_1.WParenRightW));
        const discarding = combi_1.ver(version_1.Version.v751, combi_1.str("DISCARDING DUPLICATES"));
        const corr = combi_1.ver(version_1.Version.v740sp05, combi_1.seq(combi_1.str("CORRESPONDING"), new _2.TypeName(), combi_1.tok(tokens_1.ParenLeftW), combi_1.opt(baseParen), new Source(), combi_1.opt(discarding), combi_1.opt(mapping), combi_1.opt(combi_1.seq(combi_1.str("EXCEPT"), combi_1.alt(combi_1.plus(new _2.Field()), combi_1.str("*")))), rparen));
        const arith = combi_1.seq(new _1.ArithOperator(), new Source());
        const conv = combi_1.ver(version_1.Version.v740sp02, combi_1.seq(combi_1.str("CONV"), new _2.TypeName(), combi_1.tok(tokens_1.ParenLeftW), new Source(), rparen, combi_1.opt(arith)));
        const or = combi_1.seq(combi_1.str("OR"), new Source());
        const swhen = combi_1.seq(combi_1.str("WHEN"), new Source(), combi_1.star(or), combi_1.str("THEN"), new Source());
        const swit = combi_1.ver(version_1.Version.v740sp02, combi_1.seq(combi_1.str("SWITCH"), new _2.TypeName(), combi_1.tok(tokens_1.ParenLeftW), combi_1.opt(new _1.Let()), new Source(), combi_1.plus(swhen), combi_1.opt(combi_1.seq(combi_1.str("ELSE"), new Source())), rparen));
        const fieldList = combi_1.seq(new _2.FieldSub(), combi_1.str("="), new Source());
        const base = combi_1.seq(combi_1.str("BASE"), new Source());
        const tab = combi_1.seq(combi_1.opt(new _2.For()), combi_1.alt(combi_1.plus(combi_1.seq(combi_1.tok(tokens_1.WParenLeftW), combi_1.star(new Source()), combi_1.tok(tokens_1.WParenRightW))), combi_1.plus(combi_1.seq(combi_1.star(fieldList), combi_1.seq(combi_1.tok(tokens_1.WParenLeftW), combi_1.plus(fieldList), combi_1.tok(tokens_1.WParenRightW))))));
        const strucOrTab = combi_1.seq(combi_1.opt(new _1.Let()), combi_1.opt(base), combi_1.alt(combi_1.plus(fieldList), tab));
        const tabdef = combi_1.ver(version_1.Version.v740sp08, combi_1.alt(combi_1.str("OPTIONAL"), combi_1.seq(combi_1.str("DEFAULT"), new Source())));
        const value = combi_1.ver(version_1.Version.v740sp02, combi_1.seq(combi_1.str("VALUE"), new _2.TypeName(), combi_1.tok(tokens_1.ParenLeftW), combi_1.opt(combi_1.alt(combi_1.seq(new Source(), combi_1.opt(tabdef)), strucOrTab)), rparen));
        const when = combi_1.seq(combi_1.str("WHEN"), new _1.Cond(), combi_1.str("THEN"), new Source());
        const elsee = combi_1.seq(combi_1.str("ELSE"), new Source());
        const cond = combi_1.ver(version_1.Version.v740sp02, combi_1.seq(combi_1.str("COND"), new _2.TypeName(), combi_1.tok(tokens_1.ParenLeftW), combi_1.opt(new _1.Let()), combi_1.plus(when), combi_1.opt(elsee), rparen, combi_1.opt(after)));
        const reff = combi_1.ver(version_1.Version.v740sp02, combi_1.seq(combi_1.str("REF"), new _2.TypeName(), combi_1.tok(tokens_1.ParenLeftW), new Source(), rparen));
        const exact = combi_1.ver(version_1.Version.v740sp02, combi_1.seq(combi_1.str("EXACT"), new _2.TypeName(), combi_1.tok(tokens_1.ParenLeftW), new Source(), rparen));
        const filter = combi_1.ver(version_1.Version.v740sp08, combi_1.seq(combi_1.str("FILTER"), new _2.TypeName(), combi_1.tok(tokens_1.ParenLeftW), new Source(), combi_1.opt(combi_1.str("EXCEPT")), combi_1.opt(combi_1.seq(combi_1.str("IN"), new Source())), combi_1.opt(combi_1.seq(combi_1.str("USING KEY"), new _1.SimpleName())), combi_1.seq(combi_1.str("WHERE"), new _1.ComponentCond()), rparen));
        const fields = combi_1.seq(new _2.Field(), combi_1.str("="), new Source());
        const reduce = combi_1.ver(version_1.Version.v740sp08, combi_1.seq(combi_1.str("REDUCE"), new _2.TypeName(), combi_1.tok(tokens_1.ParenLeftW), combi_1.opt(new _1.Let()), combi_1.str("INIT"), combi_1.plus(fields), new _2.For(), combi_1.str("NEXT"), combi_1.plus(fields), rparen, combi_1.opt(after)));
        const ret = combi_1.alt(old, corr, conv, value, cond, reff, exact, swit, filter, reduce);
        return ret;
    }
}
exports.Source = Source;
