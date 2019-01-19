"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constant_1 = require("./constant");
class ClassConstant extends constant_1.Constant {
    constructor(node, scope) {
        /*
        if (!(node.get() instanceof Statements.Constant)) {
          throw new Error("Constant, unexpected node");
        }
        const found = node.findFirstExpression(Expressions.NamespaceSimpleName);
        if (found === undefined) {
          throw new Error("Constant, unexpected node");
        }
        const token = found.getFirstToken();
    */
        super(node);
        this.scope = scope;
    }
    getScope() {
        return this.scope;
    }
}
exports.ClassConstant = ClassConstant;
