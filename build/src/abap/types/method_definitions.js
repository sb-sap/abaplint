"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const method_definition_1 = require("./method_definition");
const class_definition_1 = require("../../abap/structures/class_definition");
const Structures = require("../../abap/structures");
const statements_1 = require("../../abap/statements");
const scope_1 = require("./scope");
class MethodDefinitions {
    constructor(node) {
        this.pri = [];
        this.pub = [];
        this.pro = [];
        this.parse(node);
    }
    getPublic() {
        return this.pub;
    }
    getProtected() {
        return this.pro;
    }
    getPrivate() {
        return this.pri;
    }
    getAll() {
        return this.pub.concat(this.pro).concat(this.pri);
    }
    parse(node) {
        const cdef = node.findFirstStructure(class_definition_1.ClassDefinition);
        if (!cdef) {
            throw new Error("MethodDefinitions, expected ClassDefinition as part of input node");
        }
        const pri = cdef.findFirstStructure(Structures.PrivateSection);
        if (pri) {
            const defs = pri.findAllStatements(statements_1.MethodDef);
            for (const def of defs) {
                this.pri.push(new method_definition_1.MethodDefinition(def, scope_1.Scope.Private));
            }
        }
        const pro = node.findFirstStructure(Structures.ProtectedSection);
        if (pro) {
            const defs = pro.findAllStatements(statements_1.MethodDef);
            for (const def of defs) {
                this.pro.push(new method_definition_1.MethodDefinition(def, scope_1.Scope.Protected));
            }
        }
        const pub = node.findFirstStructure(Structures.PublicSection);
        if (pub) {
            const defs = pub.findAllStatements(statements_1.MethodDef);
            for (const def of defs) {
                this.pub.push(new method_definition_1.MethodDefinition(def, scope_1.Scope.Public));
            }
        }
    }
}
exports.MethodDefinitions = MethodDefinitions;
