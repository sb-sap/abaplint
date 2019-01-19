"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _abap_object_1 = require("../objects/_abap_object");
class ABAPRule {
    run(obj, reg) {
        if (!(obj instanceof _abap_object_1.ABAPObject)) {
            return [];
        }
        const abap = obj;
        let output = [];
        for (const file of abap.getABAPFiles()) {
            output = output.concat(this.runParsed(file, reg, obj));
        }
        return output;
    }
}
exports.ABAPRule = ABAPRule;
