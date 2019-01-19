"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const version_1 = require("../../version");
const tokens_1 = require("../tokens/");
const target_1 = require("./target");
class SQLTarget extends combi_1.Expression {
    getRunnable() {
        const at = combi_1.ver(version_1.Version.v740sp05, combi_1.seq(combi_1.alt(combi_1.tok(tokens_1.WAt), combi_1.tok(tokens_1.At)), new target_1.Target()));
        return combi_1.alt(new target_1.Target(), at);
    }
}
exports.SQLTarget = SQLTarget;
