"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
class RadioGroupName extends combi_1.Expression {
    getRunnable() {
        return combi_1.regex(/^[\w\d%]+$/);
    }
}
exports.RadioGroupName = RadioGroupName;
