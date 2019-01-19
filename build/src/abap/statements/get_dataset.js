"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class GetDataset extends _statement_1.Statement {
    getMatcher() {
        const position = combi_1.seq(combi_1.str("POSITION"), new expressions_1.Target());
        const attr = combi_1.seq(combi_1.str("ATTRIBUTES"), new expressions_1.Target());
        const ret = combi_1.seq(combi_1.str("GET DATASET"), new expressions_1.Target(), combi_1.opt(combi_1.per(position, attr)));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.GetDataset = GetDataset;
