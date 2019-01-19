"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const tokens_1 = require("../tokens/");
const version_1 = require("../../version");
class Write extends _statement_1.Statement {
    getMatcher() {
        const mask = combi_1.seq(combi_1.str("USING"), combi_1.alt(combi_1.str("NO EDIT MASK"), combi_1.seq(combi_1.str("EDIT MASK"), new expressions_1.Source())));
        const onOff = combi_1.alt(combi_1.alt(combi_1.str("ON"), combi_1.str("OFF")), combi_1.seq(combi_1.str("="), new expressions_1.FieldSub()));
        const to = combi_1.seq(combi_1.str("TO"), new expressions_1.Target());
        const options = combi_1.per(mask, to, combi_1.seq(combi_1.str("EXPONENT"), new expressions_1.Source()), combi_1.str("NO-GROUPING"), combi_1.str("NO-ZERO"), combi_1.str("CENTERED"), combi_1.seq(combi_1.str("INPUT"), combi_1.opt(onOff)), combi_1.str("NO-GAP"), combi_1.str("LEFT-JUSTIFIED"), combi_1.str("AS LINE"), combi_1.str("AS ICON"), combi_1.seq(combi_1.str("FRAMES"), onOff), combi_1.seq(combi_1.str("HOTSPOT"), combi_1.opt(onOff)), combi_1.str("AS CHECKBOX"), combi_1.str("AS SYMBOL"), combi_1.str("RIGHT-JUSTIFIED"), combi_1.seq(combi_1.str("TIME ZONE"), new expressions_1.Source()), combi_1.seq(combi_1.str("UNDER"), new expressions_1.Source()), combi_1.seq(combi_1.str("STYLE"), new expressions_1.Source()), combi_1.seq(combi_1.str("ROUND"), new expressions_1.Source()), combi_1.seq(combi_1.str("QUICKINFO"), new expressions_1.Source()), combi_1.str("ENVIRONMENT TIME FORMAT"), combi_1.regex(/^[YMD]{2,4}\/?[YMD]{2,4}\/?[YMD]{2,4}$/i), combi_1.seq(combi_1.str("UNIT"), new expressions_1.Source()), combi_1.seq(combi_1.str("INTENSIFIED"), combi_1.opt(onOff)), combi_1.seq(combi_1.str("INDEX"), new expressions_1.Source()), combi_1.seq(combi_1.str("DECIMALS"), new expressions_1.Source()), combi_1.seq(combi_1.str("INVERSE"), combi_1.opt(onOff)), combi_1.seq(combi_1.str("COLOR"), combi_1.opt(combi_1.str("=")), new expressions_1.Source()), combi_1.seq(combi_1.str("CURRENCY"), new expressions_1.Source()), combi_1.str("NO-SIGN"));
        const post = combi_1.seq(combi_1.alt(combi_1.regex(/^[\w\d]+$/), combi_1.regex(/^\*$/)), combi_1.tok(tokens_1.ParenRightW));
        const wlength = combi_1.seq(combi_1.tok(tokens_1.WParenLeft), post);
        const length = combi_1.seq(combi_1.tok(tokens_1.ParenLeft), post);
        // todo, move to expression?
        const complex = combi_1.alt(wlength, combi_1.seq(combi_1.alt(new expressions_1.FieldChain(), combi_1.regex(/^\/?[\w\d]+$/), combi_1.str("/")), combi_1.opt(length)));
        const at = combi_1.seq(combi_1.opt(combi_1.str("AT")), complex);
        const ret = combi_1.seq(combi_1.str("WRITE"), combi_1.opt(at), combi_1.opt(combi_1.alt(new expressions_1.Source(), new expressions_1.Dynamic())), combi_1.opt(options));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Write = Write;
