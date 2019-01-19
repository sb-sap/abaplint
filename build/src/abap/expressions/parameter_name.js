"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
class ParameterName extends combi_1.Expression {
    getRunnable() {
        // todo, think this can be reduced,
        return combi_1.regex(/^[&_!]?\*?\w*(\/\w+\/)?\d*[a-zA-Z_%\$][\w\*%\$\?]*(~\w+)?$/);
    }
}
exports.ParameterName = ParameterName;
