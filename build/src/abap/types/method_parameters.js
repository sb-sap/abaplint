"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const method_def_1 = require("../../abap/statements/method_def");
const method_parameter_1 = require("./method_parameter");
const expressions_1 = require("../../abap/expressions");
class MethodParameters {
    constructor(node) {
        if (!(node.get() instanceof method_def_1.MethodDef)) {
            throw new Error("MethodDefinition, expected MethodDef as part of input node");
        }
        this.importing = [];
        this.exporting = [];
        this.changing = [];
        this.returning = undefined;
        this.exceptions = [];
        this.parse(node);
    }
    getAll() {
        let ret = [];
        const returning = this.getReturning();
        if (returning) {
            ret.push(returning);
        }
        ret = ret.concat(this.getImporting());
        ret = ret.concat(this.getExporting());
        ret = ret.concat(this.getChanging());
        return ret;
    }
    getImporting() {
        return this.importing;
    }
    getExporting() {
        return this.exporting;
    }
    getChanging() {
        return this.changing;
    }
    getReturning() {
        return this.returning;
    }
    getExceptions() {
        return this.exceptions;
    }
    parse(node) {
        const importing = node.findFirstExpression(expressions_1.MethodDefImporting);
        if (importing) {
            this.add(this.importing, importing);
        }
        const exporting = node.findFirstExpression(expressions_1.MethodDefExporting);
        if (exporting) {
            this.add(this.exporting, exporting);
        }
        const changing = node.findFirstExpression(expressions_1.MethodDefChanging);
        if (changing) {
            this.add(this.changing, changing);
        }
        const returning = node.findFirstExpression(expressions_1.MethodDefReturning);
        if (returning) {
            const found = returning.findFirstExpression(expressions_1.MethodParam);
            if (found) {
                this.returning = new method_parameter_1.MethodParameter(found);
            }
        }
        // todo:
        // this.exceptions = [];
        // also consider RAISING vs EXCEPTIONS
    }
    add(target, source) {
        const params = source.findAllExpressions(expressions_1.MethodParam);
        for (const param of params) {
            target.push(new method_parameter_1.MethodParameter(param));
        }
    }
}
exports.MethodParameters = MethodParameters;
