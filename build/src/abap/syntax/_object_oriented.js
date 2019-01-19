"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../statements");
const Expressions = require("../expressions");
const _globals_1 = require("./_globals");
const files_1 = require("../../files");
class ObjectOriented {
    constructor(obj, reg, variables) {
        this.obj = obj;
        this.reg = reg;
        this.variables = variables;
    }
    findClassName(node) {
        if (!(node.get() instanceof Statements.ClassImplementation
            || node.get() instanceof Statements.ClassDefinition)) {
            throw new Error("findClassName, unexpected node type");
        }
        const blah = node.findFirstExpression(Expressions.ClassName);
        if (blah === undefined) {
            throw new Error("findClassName, unexpected node type");
        }
        return blah.getFirstToken().getStr();
    }
    classDefinition(node) {
        this.variables.pushScope(this.findClassName(node));
        // todo
    }
    classImplementation(node) {
        const className = this.findClassName(node);
        this.variables.pushScope(className);
        const classDefinition = this.findDefinition(className);
        if (classDefinition === undefined) {
            throw new Error("Class definition \"" + className + "\" not found");
        }
        const classAttributes = classDefinition.getAttributes();
        if (classAttributes === undefined) {
            throw new Error("Error reading class attributes");
        }
        // todo, also add attributes and constants from super classes
        this.variables.addList(classAttributes.getConstants());
        this.variables.addList(classAttributes.getInstance()); // todo, this is not correct, take care of instance vs static
        this.variables.addList(classAttributes.getStatic()); // todo, this is not correct, take care of instance vs static
        this.fromSuperClass(classDefinition);
    }
    methodImplementation(node) {
        this.variables.pushScope("method");
        const className = this.variables.getParentName();
        const classDefinition = this.findDefinition(className);
        // todo, this is not correct, add correct types, plus when is "super" allowed?
        const file = new files_1.MemoryFile("_method_locals.prog.abap", "* Method Locals\n" +
            "DATA super TYPE REF TO object.\n" +
            "DATA me TYPE REF TO object.\n");
        this.variables.addList(_globals_1.Globals.typesInFile(file));
        let methodName = node.findFirstExpression(Expressions.MethodName).getFirstToken().getStr();
        let methodDefinition = undefined;
        methodDefinition = this.findMethod(classDefinition, methodName);
        // todo, this is not completely correct, and too much code
        if (methodName.includes("~")) {
            const interfaceName = methodName.split("~")[0];
            methodName = methodName.split("~")[1];
            const intf = this.reg.getObject("INTF", interfaceName);
            if (intf && intf.getDefinition()) {
                const methods = intf.getDefinition().getMethodDefinitions();
                for (const method of methods) {
                    if (method.getName().toUpperCase() === methodName.toUpperCase()) {
                        methodDefinition = method;
                        break;
                    }
                }
            }
        }
        if (methodDefinition === undefined) {
            throw new Error("Method definition \"" + methodName + "\" not found");
        }
        this.variables.addList(methodDefinition.getParameters().getAll());
    }
    findDefinition(name) {
        for (const file of this.obj.getABAPFiles()) {
            const found = file.getClassDefinition(name);
            if (found) {
                return found;
            }
        }
        throw new Error("Class defintion for \"" + name + "\" not found");
    }
    findMethod(classDefinition, methodName) {
        for (const method of classDefinition.getMethodDefinitions().getAll()) {
            if (method.getName().toUpperCase() === methodName.toUpperCase()) {
                if (method.isRedefinition()) {
                    return this.findMethodInSuper(classDefinition, methodName);
                }
                else {
                    return method;
                }
            }
        }
        return undefined;
    }
    findMethodInSuper(child, methodName) {
        const sup = child.getSuperClass();
        if (sup === undefined) {
            return;
        }
        const cdef = this.findSuperDefinition(sup);
        const found = this.findMethod(cdef, methodName);
        if (found) {
            return found;
        }
        return this.findMethodInSuper(cdef, methodName);
    }
    findSuperDefinition(name) {
        const csup = this.reg.getObject("CLAS", name);
        if (csup === undefined) {
            throw new Error("super class \"" + name + "\" not found");
        }
        const cdef = csup.getClassDefinition();
        if (cdef === undefined) {
            throw new Error("super class \"" + name + "\" contains errors");
        }
        return cdef;
    }
    fromSuperClass(child) {
        const sup = child.getSuperClass();
        if (sup === undefined) {
            return;
        }
        const cdef = this.findSuperDefinition(sup);
        const attr = cdef.getAttributes();
        if (attr === undefined) {
            throw new Error("super class \"" + sup + "\" error in attributes");
        }
        this.variables.addList(attr.getConstants()); // todo, handle scope and instance vs static
        this.variables.addList(attr.getInstance()); // todo, handle scope and instance vs static
        this.variables.addList(attr.getStatic()); // todo, handle scope and instance vs static
        this.fromSuperClass(cdef);
    }
}
exports.ObjectOriented = ObjectOriented;
