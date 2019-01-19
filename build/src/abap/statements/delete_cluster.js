"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const expressions_1 = require("../expressions");
const version_1 = require("../../version");
class DeleteCluster extends _statement_1.Statement {
    getMatcher() {
        const client = combi_1.seq(combi_1.str("CLIENT"), new expressions_1.Source());
        const ret = combi_1.seq(combi_1.str("DELETE FROM DATABASE"), new expressions_1.NamespaceSimpleName(), combi_1.tok(tokens_1.ParenLeft), new expressions_1.SimpleName(), combi_1.tok(tokens_1.ParenRightW), combi_1.opt(client), combi_1.str("ID"), new expressions_1.Source());
        return combi_1.verNot(version_1.Version.Cloud, ret);
    }
}
exports.DeleteCluster = DeleteCluster;
