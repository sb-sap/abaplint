"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
class SQLAsName extends combi_1.Expression {
    getRunnable() {
        // todo, below allows too much?
        return combi_1.regex(/^[&_!]?\*?\w*(\/\w+\/)?\d*[a-zA-Z_%\$][\w\*%\$\?]*(~\w+)?$/);
    }
}
exports.SQLAsName = SQLAsName;
