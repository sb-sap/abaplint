"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
class EndTry extends _statement_1.Statement {
    getMatcher() {
        return combi_1.str("ENDTRY");
    }
}
exports.EndTry = EndTry;
