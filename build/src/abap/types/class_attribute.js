"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../statements");
const Expressions = require("../expressions");
const _typed_identifier_1 = require("./_typed_identifier");
class ClassAttribute extends _typed_identifier_1.TypedIdentifier {
    //  private readOnly: boolean;
    constructor(node, scope) {
        if (!(node.get() instanceof Statements.Data)
            && !(node.get() instanceof Statements.DataBegin)
            && !(node.get() instanceof Statements.ClassData)
            && !(node.get() instanceof Statements.ClassDataBegin)) {
            throw new Error("ClassAttribute, unexpected node, 1");
        }
        const found = node.findFirstExpression(Expressions.NamespaceSimpleName);
        if (found === undefined) {
            throw new Error("ClassAttribute, unexpected node, 2");
        }
        const token = found.getFirstToken();
        super(token, node);
        this.scope = scope;
        //    this.readOnly = undefined;
    }
    getScope() {
        return this.scope;
    }
}
exports.ClassAttribute = ClassAttribute;
