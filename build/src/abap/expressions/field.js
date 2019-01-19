"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
class Field extends combi_1.Expression {
    getRunnable() {
        // "&1" can be used for almost anything(field names, method names etc.) in macros
        // field names with only digits should not be possible
        return combi_1.regex(/^[&_!]?\*?\w*(\/\w+\/)?\d*[a-zA-Z_%\$][\w\*%\$\?]*(~\w+)?$/);
    }
}
exports.Field = Field;
