"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
const version_1 = require("../../version");
class StringTemplate extends combi_1.Expression {
    getRunnable() {
        return combi_1.ver(version_1.Version.v702, combi_1.tok(tokens_1.StringTemplate));
    }
}
exports.StringTemplate = StringTemplate;
