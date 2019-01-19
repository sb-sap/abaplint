"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const version_1 = require("../../version");
const tokens_1 = require("../tokens/");
const source_1 = require("./source");
class SQLSource extends combi_1.Expression {
    getRunnable() {
        const paren = combi_1.seq(combi_1.tok(tokens_1.ParenLeftW), new source_1.Source(), combi_1.tok(tokens_1.WParenRightW));
        // todo, this Source must be a simple field?
        const at = combi_1.ver(version_1.Version.v740sp05, combi_1.seq(combi_1.tok(tokens_1.WAt), combi_1.alt(new source_1.Source(), paren)));
        return combi_1.alt(new source_1.Source(), at);
    }
}
exports.SQLSource = SQLSource;
