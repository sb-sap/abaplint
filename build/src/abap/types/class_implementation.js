"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _identifier_1 = require("./_identifier");
const Structures = require("../../abap/structures");
const Statements = require("../../abap/statements");
const Expressions = require("../../abap/expressions");
const method_implementation_1 = require("./method_implementation");
class ClassImplementation extends _identifier_1.Identifier {
    constructor(node) {
        if (!(node.get() instanceof Structures.ClassImplementation)) {
            throw new Error("ClassImplementation, unexpected node type");
        }
        const name = node.findFirstStatement(Statements.ClassImplementation).findFirstExpression(Expressions.ClassName).getFirstToken();
        super(name, node);
        this.node = node;
    }
    getMethodImplementations() {
        const ret = [];
        for (const method of this.node.findAllStructures(Structures.Method)) {
            ret.push(new method_implementation_1.MethodImplementation(method));
        }
        return ret;
    }
}
exports.ClassImplementation = ClassImplementation;
