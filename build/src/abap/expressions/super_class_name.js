"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const class_name_1 = require("./class_name");
class SuperClassName extends combi_1.Expression {
    getRunnable() {
        return new class_name_1.ClassName();
    }
}
exports.SuperClassName = SuperClassName;
