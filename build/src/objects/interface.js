"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _abap_object_1 = require("./_abap_object");
class Interface extends _abap_object_1.ABAPObject {
    getType() {
        return "INTF";
    }
    getDefinition() {
        const main = this.getMain();
        if (!main) {
            return undefined;
        }
        const definitions = main.getInterfaceDefinitions();
        if (definitions.length === 0) {
            return undefined;
        }
        return definitions[0];
    }
    getMain() {
        const files = this.getABAPFiles();
        if (files.length > 1) {
            throw new Error("interface.ts, did not expect multiple parsed files");
        }
        return files[0];
    }
}
exports.Interface = Interface;
