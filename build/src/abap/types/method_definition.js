"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statements_1 = require("../../abap/statements");
const Expressions = require("../../abap/expressions");
const method_parameters_1 = require("./method_parameters");
const _identifier_1 = require("./_identifier");
class MethodDefinition extends _identifier_1.Identifier {
    // todo:
    // abstract
    // final
    constructor(node, scope) {
        if (!(node.get() instanceof statements_1.MethodDef)) {
            throw new Error("MethodDefinition, expected MethodDef as part of input node");
        }
        const found = node.findFirstExpression(Expressions.MethodName);
        if (found === undefined) {
            throw new Error("MethodDefinition, expected MethodDef as part of input node");
        }
        super(found.getFirstToken(), node);
        this.redfinition = false;
        if (node.findFirstExpression(Expressions.Redefinition)) {
            this.redfinition = true;
        }
        this.scope = scope;
        this.parameters = new method_parameters_1.MethodParameters(node);
    }
    getScope() {
        return this.scope;
    }
    isRedefinition() {
        return this.redfinition;
    }
    getParameters() {
        return this.parameters;
    }
}
exports.MethodDefinition = MethodDefinition;
