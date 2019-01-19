"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const method_definitions_1 = require("./method_definitions");
const expressions_1 = require("../../abap/expressions");
const Statements = require("../../abap/statements");
const Structures = require("../../abap/structures");
const Expressions = require("../../abap/expressions");
const class_attributes_1 = require("./class_attributes");
const _identifier_1 = require("./_identifier");
// todo, is this the same as an InterfaceDefinition?
class ClassDefinition extends _identifier_1.Identifier {
    constructor(node) {
        if (!(node.get() instanceof Structures.ClassDefinition)) {
            throw new Error("ClassDefinition, unexpected node type");
        }
        const name = node.findFirstStatement(Statements.ClassDefinition).findFirstExpression(Expressions.ClassName).getFirstToken();
        super(name, node);
        this.node = node;
    }
    getMethodDefinitions() {
        if (!this.node) {
            return undefined;
        }
        return new method_definitions_1.MethodDefinitions(this.node);
    }
    getSuperClass() {
        if (!this.node) {
            return undefined;
        }
        const found = this.node.findFirstStatement(Statements.ClassDefinition);
        const token = found ? found.findFirstExpression(expressions_1.SuperClassName) : undefined;
        return token ? token.getFirstToken().getStr() : undefined;
    }
    getAttributes() {
        if (!this.node) {
            return undefined;
        }
        return new class_attributes_1.ClassAttributes(this.node);
    }
    isException() {
        const superClass = this.getSuperClass();
        // todo, this logic is not correct
        if (superClass && superClass.match(/^.?cx_.*$/i)) {
            return true;
        }
        else {
            return false;
        }
    }
    isLocal() {
        return !this.isGlobal();
    }
    isGlobal() {
        return this.node.findFirstExpression(Expressions.ClassGlobal) !== undefined;
    }
    isFinal() {
        return this.node.findFirstExpression(Expressions.ClassFinal) !== undefined;
    }
}
exports.ClassDefinition = ClassDefinition;
