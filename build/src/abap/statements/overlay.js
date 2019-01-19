"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class Overlay extends _statement_1.Statement {
    getMatcher() {
        const only = combi_1.seq(combi_1.str("ONLY"), new expressions_1.Source());
        const ret = combi_1.seq(combi_1.str("OVERLAY"), new expressions_1.Target(), combi_1.str("WITH"), new expressions_1.Source(), combi_1.opt(only));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Overlay = Overlay;
