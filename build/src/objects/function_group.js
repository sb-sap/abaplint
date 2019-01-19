"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _abap_object_1 = require("./_abap_object");
const types_1 = require("../abap/types");
const xmljs = require("xml-js");
const xml_utils_1 = require("../xml_utils");
class FunctionGroup extends _abap_object_1.ABAPObject {
    getType() {
        return "FUGR";
    }
    getModules() {
        const xml = this.getXML();
        if (xml === undefined) {
            return [];
        }
        const parsed = xmljs.xml2js(xml, { compact: true });
        return this.parse(parsed);
    }
    getModule(name) {
        for (const mod of this.getModules()) {
            if (mod.getName().toUpperCase() === name.toUpperCase()) {
                return mod;
            }
        }
        return undefined;
    }
    parse(data) {
        const ret = [];
        const functions = data.abapGit["asx:abap"]["asx:values"].FUNCTIONS;
        for (const module of xml_utils_1.xmlToArray(functions.item)) {
            ret.push(new types_1.FunctionModuleDefinition(module));
        }
        return ret;
    }
    getXML() {
        for (const file of this.getFiles()) {
            if (file.getFilename().match(/\.fugr\.xml$/i)) {
                return file.getRaw();
            }
        }
        return undefined;
    }
}
exports.FunctionGroup = FunctionGroup;
