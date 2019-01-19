"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
class MethodParamName extends combi_1.Expression {
    getRunnable() {
        const field = combi_1.regex(/^!?(\/\w+\/)?\w+$/);
        return field;
    }
}
exports.MethodParamName = MethodParamName;
