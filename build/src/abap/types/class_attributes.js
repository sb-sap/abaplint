"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Structures = require("../../abap/structures");
const Statements = require("../../abap/statements");
const class_attribute_1 = require("./class_attribute");
const class_constant_1 = require("./class_constant");
const scope_1 = require("./scope");
class ClassAttributes {
    constructor(node) {
        this.static = [];
        this.instance = [];
        this.constants = [];
        this.parse(node);
    }
    getStatic() {
        return this.static;
    }
    getInstance() {
        return this.instance;
    }
    getConstants() {
        return this.constants;
    }
    parse(node) {
        const cdef = node.findFirstStructure(Structures.ClassDefinition);
        if (!cdef) {
            throw new Error("MethodDefinition, expected ClassDefinition as part of input node");
        }
        this.parseSection(cdef.findFirstStructure(Structures.PublicSection), scope_1.Scope.Public);
        this.parseSection(cdef.findFirstStructure(Structures.PrivateSection), scope_1.Scope.Private);
        this.parseSection(cdef.findFirstStructure(Structures.ProtectedSection), scope_1.Scope.Protected);
    }
    parseSection(node, scope) {
        if (!node) {
            return;
        }
        let defs = node.findAllStatements(Statements.Data).concat(node.findAllStatements(Statements.DataBegin));
        for (const def of defs) {
            this.instance.push(new class_attribute_1.ClassAttribute(def, scope));
        }
        defs = node.findAllStatements(Statements.ClassData).concat(node.findAllStatements(Statements.ClassDataBegin));
        for (const def of defs) {
            this.static.push(new class_attribute_1.ClassAttribute(def, scope));
        }
        defs = node.findAllStatements(Statements.Constant).concat(node.findAllStatements(Statements.ConstantBegin));
        for (const def of defs) {
            this.constants.push(new class_constant_1.ClassConstant(def, scope));
        }
    }
}
exports.ClassAttributes = ClassAttributes;
