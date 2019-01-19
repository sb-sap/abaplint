"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class ReadDataset extends _statement_1.Statement {
    getMatcher() {
        const ret = combi_1.seq(combi_1.str("READ DATASET"), new expressions_1.Source(), combi_1.str("INTO"), new expressions_1.Target(), combi_1.opt(combi_1.seq(combi_1.str("MAXIMUM LENGTH"), new expressions_1.Source())), combi_1.opt(combi_1.seq(combi_1.str("ACTUAL LENGTH"), new expressions_1.Target())), combi_1.opt(combi_1.seq(combi_1.str("LENGTH"), new expressions_1.Target())));
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.ReadDataset = ReadDataset;
