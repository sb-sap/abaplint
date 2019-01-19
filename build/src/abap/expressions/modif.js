"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
class Modif extends combi_1.Expression {
    getRunnable() {
        return combi_1.regex(/^\w{1,3}$/);
    }
}
exports.Modif = Modif;
