"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
class MessageClass extends combi_1.Expression {
    getRunnable() {
        // "&1" can be used for almost anything(field names, method names etc.) in macros
        return combi_1.regex(/^>?(\/\w+\/)?\w+#?@?\/?!?&?>?$/);
    }
}
exports.MessageClass = MessageClass;
