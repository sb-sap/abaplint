"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../abap/statements");
const expressions_1 = require("../abap/expressions");
const _abap_object_1 = require("../objects/_abap_object");
const _statement_1 = require("../abap/statements/_statement");
class MethodLengthStats {
    static run(obj) {
        const res = [];
        let pos = undefined;
        let name = "";
        let count = 0;
        let method = false;
        if (!(obj instanceof _abap_object_1.ABAPObject)) {
            return [];
        }
        for (const file of obj.getABAPFiles()) {
            for (const stat of file.getStatements()) {
                const type = stat.get();
                if (type instanceof Statements.Method) {
                    pos = stat.getFirstToken().getPos();
                    name = this.findName(stat);
                    method = true;
                    count = 0;
                }
                else if (type instanceof Statements.EndMethod) {
                    if (pos) {
                        res.push({ name, count, file, pos });
                    }
                    else {
                        continue;
                    }
                    method = false;
                }
                else if (method === true
                    && !(type instanceof _statement_1.Comment)
                    && !(type instanceof _statement_1.Empty)) {
                    count = count + 1;
                }
            }
        }
        return res;
    }
    static findName(stat) {
        let name = "";
        const nameExpr = stat.findFirstExpression(expressions_1.MethodName);
        if (nameExpr) {
            name = nameExpr.getFirstToken().getStr();
        }
        else {
            throw new Error("MethodLength, findName, expected MethodName");
        }
        return name;
    }
}
exports.MethodLengthStats = MethodLengthStats;
