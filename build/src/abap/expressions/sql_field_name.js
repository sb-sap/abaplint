"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
class SQLFieldName extends combi_1.Expression {
    getRunnable() {
        return combi_1.regex(/^(?!(?:SINGLE|INTO|APPENDING|FROM)$)\w+(~\w+)?$/i);
    }
}
exports.SQLFieldName = SQLFieldName;
