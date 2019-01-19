"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const tokens_1 = require("../tokens");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class SelectionScreen extends _statement_1.Statement {
    getMatcher() {
        const blockName = new expressions_1.FieldSub();
        const beginBlock = combi_1.seq(combi_1.str("BEGIN OF BLOCK"), blockName, combi_1.opt(combi_1.str("WITH FRAME")), combi_1.opt(combi_1.seq(combi_1.str("TITLE"), new expressions_1.Source())), combi_1.opt(combi_1.str("NO INTERVALS")));
        const endBlock = combi_1.seq(combi_1.str("END OF BLOCK"), blockName);
        const nesting = combi_1.seq(combi_1.str("NESTING LEVEL"), new expressions_1.Source());
        const scrOptions = combi_1.per(combi_1.seq(combi_1.str("AS"), combi_1.alt(combi_1.str("WINDOW"), combi_1.str("SUBSCREEN"))), combi_1.seq(combi_1.str("TITLE"), new expressions_1.Source()), combi_1.str("NO INTERVALS"), nesting);
        const beginScreen = combi_1.seq(combi_1.str("BEGIN OF SCREEN"), new expressions_1.Integer(), combi_1.opt(scrOptions));
        const endScreen = combi_1.seq(combi_1.str("END OF SCREEN"), new expressions_1.Integer());
        const beginLine = combi_1.str("BEGIN OF LINE");
        const endLine = combi_1.str("END OF LINE");
        const modif = combi_1.seq(combi_1.str("MODIF ID"), new expressions_1.Modif());
        const visible = combi_1.seq(combi_1.str("VISIBLE LENGTH"), combi_1.regex(/^\d+$/));
        const commentOpt = combi_1.per(combi_1.seq(combi_1.str("FOR FIELD"), new expressions_1.Field()), modif, visible);
        const position = combi_1.seq(combi_1.opt(combi_1.regex(/^\/?[\d\w]+$/)), combi_1.alt(combi_1.tok(tokens_1.ParenLeft), combi_1.tok(tokens_1.WParenLeft)), new expressions_1.Integer(), combi_1.alt(combi_1.tok(tokens_1.ParenRightW), combi_1.tok(tokens_1.ParenRight)));
        const comment = combi_1.seq(combi_1.str("COMMENT"), position, combi_1.opt(new expressions_1.FieldChain()), combi_1.opt(commentOpt));
        const command = combi_1.seq(combi_1.str("USER-COMMAND"), combi_1.alt(new expressions_1.Field(), new expressions_1.Constant()));
        const push = combi_1.seq(combi_1.str("PUSHBUTTON"), position, new expressions_1.Source(), command, combi_1.opt(modif), combi_1.opt(visible));
        const def = combi_1.seq(combi_1.str("DEFAULT SCREEN"), new expressions_1.Integer());
        const tab = combi_1.seq(combi_1.str("TAB"), combi_1.tok(tokens_1.WParenLeft), new expressions_1.Integer(), combi_1.tok(tokens_1.ParenRightW), new expressions_1.FieldSub(), command, combi_1.opt(def));
        const func = combi_1.seq(combi_1.str("FUNCTION KEY"), new expressions_1.Integer());
        const skip = combi_1.seq(combi_1.str("SKIP"), combi_1.opt(new expressions_1.Integer()));
        const pos = combi_1.seq(combi_1.str("POSITION"), new expressions_1.Source());
        const incl = combi_1.seq(combi_1.str("INCLUDE BLOCKS"), blockName);
        const tabbed = combi_1.seq(combi_1.str("BEGIN OF TABBED BLOCK"), new expressions_1.Field(), combi_1.str("FOR"), new expressions_1.Integer(), combi_1.str("LINES"), combi_1.opt(combi_1.str("NO INTERVALS")));
        const uline = combi_1.seq(combi_1.str("ULINE"), combi_1.opt(position));
        const param = combi_1.seq(combi_1.str("INCLUDE PARAMETERS"), new expressions_1.Field());
        const iso = combi_1.seq(combi_1.str("INCLUDE SELECT-OPTIONS"), new expressions_1.Field());
        const ret = combi_1.seq(combi_1.str("SELECTION-SCREEN"), combi_1.alt(comment, func, skip, pos, incl, iso, push, tab, uline, beginBlock, tabbed, endBlock, beginLine, endLine, param, beginScreen, endScreen));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.SelectionScreen = SelectionScreen;
