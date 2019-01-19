"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Objects = require("../objects");
class Dump {
    constructor(reg) {
        this.reg = reg;
    }
    classes() {
        const ret = [];
        for (const obj of this.reg.getObjects()) {
            if (obj instanceof Objects.Class) {
                const definition = obj.getClassDefinition();
                if (definition === undefined) {
                    continue;
                }
                ret.push({
                    type: obj.getType(),
                    name: obj.getName(),
                    superclass: definition.getSuperClass(),
                    methods: this.methods(definition.getMethodDefinitions()),
                    attributes: this.attributes(definition.getAttributes()),
                });
            }
        }
        return ret;
    }
    methods(methods) {
        const ret = [];
        if (methods === undefined) {
            return undefined;
        }
        for (const m of methods.getAll()) {
            ret.push({
                name: m.getName(),
                scope: m.getScope(),
                parameters: this.parameters(m.getParameters()),
            });
        }
        return ret;
    }
    parameter(param) {
        if (param === undefined) {
            return undefined;
        }
        return { name: param.getName() };
    }
    parameters(parameters) {
        return {
            importing: parameters.getImporting().map(this.parameter),
            exporting: parameters.getExporting().map(this.parameter),
            changing: parameters.getChanging().map(this.parameter),
            returning: this.parameter(parameters.getReturning()),
            exceptions: parameters.getExceptions(),
        };
    }
    classAtribute(attr) {
        return {
            name: attr.getName(),
            scope: attr.getScope(),
        };
    }
    attributes(attributes) {
        if (attributes === undefined) {
            return undefined;
        }
        return {
            static: attributes.getStatic().map(this.classAtribute),
            instance: attributes.getInstance().map(this.classAtribute),
        };
    }
}
exports.Dump = Dump;
