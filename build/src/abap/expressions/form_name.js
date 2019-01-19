"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens/");
class FormName extends combi_1.Expression {
    getRunnable() {
        // todo, does not handle namespaces properly
        return combi_1.seq(combi_1.regex(/^[\w%\*\/\?]+$/), combi_1.star(combi_1.seq(combi_1.tok(tokens_1.Dash), combi_1.opt(combi_1.regex(/^\w+$/)))), combi_1.opt(combi_1.tok(tokens_1.DashW)));
    }
}
exports.FormName = FormName;
