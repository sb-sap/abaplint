"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expressions_1 = require("../../abap/expressions");
const _typed_identifier_1 = require("./_typed_identifier");
class MethodParameter extends _typed_identifier_1.TypedIdentifier {
    constructor(node) {
        if (!(node.get() instanceof expressions_1.MethodParam)) {
            throw new Error("MethodDefinition, expected MethodDef as part of input node");
        }
        const name = node.findFirstExpression(expressions_1.MethodParamName);
        if (!name) {
            throw new Error("method_parameter.ts, todo, handle pass by value and reference");
        }
        super(name.getFirstToken(), node);
    }
}
exports.MethodParameter = MethodParameter;
