"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _identifier_1 = require("./_identifier");
const Structures = require("../../abap/structures");
const Statements = require("../../abap/statements");
const Expressions = require("../../abap/expressions");
const _1 = require(".");
class InterfaceDefinition extends _identifier_1.Identifier {
    constructor(node) {
        if (!(node.get() instanceof Structures.Interface)) {
            throw new Error("InterfaceDefinition, unexpected node type");
        }
        const name = node.findFirstStatement(Statements.Interface).findFirstExpression(Expressions.ClassName).getFirstToken();
        super(name, node);
        this.node = node;
    }
    getMethodDefinitions() {
        const ret = [];
        const defs = this.node.findAllStatements(Statements.MethodDef);
        for (const def of defs) {
            ret.push(new _1.MethodDefinition(def, _1.Scope.Public));
        }
        return ret;
    }
}
exports.InterfaceDefinition = InterfaceDefinition;
