"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _statement_1 = require("./_statement");
const combi_1 = require("../combi");
class EndInterface extends _statement_1.Statement {
    getMatcher() {
        return combi_1.str("ENDINTERFACE");
    }
}
exports.EndInterface = EndInterface;
