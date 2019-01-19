"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../statements");
const Expressions = require("../expressions");
const _typed_identifier_1 = require("./_typed_identifier");
class Constant extends _typed_identifier_1.TypedIdentifier {
    constructor(node) {
        if (!(node.get() instanceof Statements.Constant || node.get() instanceof Statements.ConstantBegin)) {
            throw new Error("Constant, unexpected node");
        }
        const found = node.findFirstExpression(Expressions.NamespaceSimpleName);
        if (found === undefined) {
            throw new Error("Constant, unexpected node");
        }
        const token = found.getFirstToken();
        super(token, node);
    }
}
exports.Constant = Constant;
