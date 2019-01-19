"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xml_utils_1 = require("../../xml_utils");
class FunctionModuleDefinition {
    constructor(data) {
        this.parse(data);
    }
    getParameters() {
        return this.parameters;
    }
    getName() {
        return this.name;
    }
    parse(data) {
        this.name = data.FUNCNAME._text;
        this.parameters = [];
        if (data.IMPORT) {
            for (const param of xml_utils_1.xmlToArray(data.IMPORT.RSIMP)) {
                this.parameters.push(param.PARAMETER._text);
            }
        }
        if (data.CHANGING) {
            for (const param of xml_utils_1.xmlToArray(data.CHANGING.RSCHA)) {
                this.parameters.push(param.PARAMETER._text);
            }
        }
        if (data.EXPORT) {
            for (const param of xml_utils_1.xmlToArray(data.EXPORT.RSEXP)) {
                this.parameters.push(param.PARAMETER._text);
            }
        }
        if (data.TABLES) {
            for (const param of xml_utils_1.xmlToArray(data.TABLES.RSTBL)) {
                this.parameters.push(param.PARAMETER._text);
            }
        }
    }
}
exports.FunctionModuleDefinition = FunctionModuleDefinition;
