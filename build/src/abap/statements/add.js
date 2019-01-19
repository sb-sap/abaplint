"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const version_1 = require("../../version");
const expressions_1 = require("../expressions");
class Add extends _statement_1.Statement {
    getMatcher() {
        const ret = combi_1.seq(combi_1.str("ADD"), new expressions_1.Source(), combi_1.str("TO"), new expressions_1.Target());
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.Add = Add;
