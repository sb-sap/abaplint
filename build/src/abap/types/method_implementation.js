"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _identifier_1 = require("./_identifier");
const Structures = require("../../abap/structures");
const Expressions = require("../../abap/expressions");
class MethodImplementation extends _identifier_1.Identifier {
    constructor(node) {
        if (!(node.get() instanceof Structures.Method)) {
            throw new Error("MethodImplementation, expected Method as part of input node");
        }
        const found = node.findFirstExpression(Expressions.MethodName);
        if (found === undefined) {
            throw new Error("MethodImplementation, expected MethodName as part of input node");
        }
        super(found.getFirstToken(), node);
    }
}
exports.MethodImplementation = MethodImplementation;
