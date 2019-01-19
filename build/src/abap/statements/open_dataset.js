"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class OpenDataset extends _statement_1.Statement {
    getMatcher() {
        const mode = combi_1.seq(combi_1.str("IN"), combi_1.opt(combi_1.str("LEGACY")), combi_1.alt(combi_1.str("BINARY MODE"), combi_1.str("TEXT MODE")));
        const code = combi_1.seq(combi_1.str("CODE PAGE"), new expressions_1.Source());
        const direction = combi_1.seq(combi_1.str("FOR"), combi_1.alt(combi_1.str("OUTPUT"), combi_1.str("INPUT"), combi_1.str("APPENDING")));
        const encoding = combi_1.seq(combi_1.str("ENCODING"), new expressions_1.Source());
        const pos = combi_1.seq(combi_1.str("AT POSITION"), new expressions_1.Source());
        const message = combi_1.seq(combi_1.str("MESSAGE"), new expressions_1.Target());
        const ignoring = combi_1.str("IGNORING CONVERSION ERRORS");
        const replacement = combi_1.seq(combi_1.str("REPLACEMENT CHARACTER"), new expressions_1.Source());
        const bom = combi_1.str("SKIPPING BYTE-ORDER MARK");
        const wbom = combi_1.str("WITH BYTE-ORDER MARK");
        const type = combi_1.seq(combi_1.str("TYPE"), new expressions_1.Source());
        const feed = combi_1.str("WITH SMART LINEFEED");
        const windows = combi_1.str("WITH WINDOWS LINEFEED");
        const ret = combi_1.seq(combi_1.str("OPEN DATASET"), new expressions_1.Target(), combi_1.per(direction, type, mode, wbom, replacement, encoding, pos, message, ignoring, bom, code, feed, windows));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.OpenDataset = OpenDataset;
