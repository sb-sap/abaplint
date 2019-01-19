"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objects_1 = require("./objects");
class SkipLogic {
    constructor(reg) {
        this.reg = reg;
    }
    skip(obj) {
        if (this.reg.getConfig().getGlobal().skipGeneratedGatewayClasses
            && obj instanceof objects_1.Class
            && this.isGeneratedGatewayClass(obj)) {
            return true;
        }
        else if (this.reg.getConfig().getGlobal().skipGeneratedPersistentClasses
            && obj instanceof objects_1.Class
            && this.isGeneratedPersistentClass(obj)) {
            return true;
        }
        else if (this.reg.getConfig().getGlobal().skipGeneratedFunctionGroups
            && obj instanceof objects_1.FunctionGroup
            && this.isGeneratedFunctionGroup(obj)) {
            return true;
        }
        return false;
    }
    isGeneratedFunctionGroup(group) {
        this.reg.getObject("TOBJ", "");
        for (const obj of this.reg.getObjects()) {
            if (obj.getType() !== "TOBJ") {
                continue;
            }
            const tobj = obj;
            if (tobj.getArea() === group.getName()) {
                return true;
            }
        }
        return false;
    }
    isGeneratedGatewayClass(obj) {
        let sup = undefined;
        const definition = obj.getClassDefinition();
        if (definition) {
            sup = definition.getSuperClass();
        }
        if (obj.getName().match(/_MPC$/i) && sup === "/IWBEP/CL_MGW_PUSH_ABS_MODEL") {
            return true;
        }
        if (obj.getName().match(/_DPC$/i) && sup === "/IWBEP/CL_MGW_PUSH_ABS_DATA") {
            return true;
        }
        return false;
    }
    isGeneratedPersistentClass(obj) {
        if (obj.getCategory() === objects_1.ClassCategory.Persistent) {
            return true;
        }
        if (obj.getCategory() === objects_1.ClassCategory.PersistentFactory) {
            return true;
        }
        const main = obj.getClassDefinition();
        if (main) {
            const sup = main.getSuperClass();
            if (sup) {
                const sclass = this.reg.getObject("CLAS", sup.toUpperCase());
                if (sclass && sclass.getCategory() === objects_1.ClassCategory.PersistentFactory) {
                    return true;
                }
            }
        }
        return false;
    }
}
exports.SkipLogic = SkipLogic;
