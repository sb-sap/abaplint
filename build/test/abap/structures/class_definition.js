"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const structures_1 = require("../../../src/abap/structures");
const cases = [
    { abap: "CLASS zfoo DEFINITION. ENDCLASS." },
    { abap: "CLASS zfoo DEFINITION. PUBLIC SECTION. CONSTANTS foo TYPE i VALUE 2. ENDCLASS." },
    { abap: "CLASS zfoo DEFINITION. PRIVATE SECTION. CONSTANTS foo TYPE i VALUE 2. ENDCLASS." },
    { abap: "CLASS zfoo DEFINITION. PROTECTED SECTION. CONSTANTS foo TYPE i VALUE 2. ENDCLASS." },
];
_utils_1.structureType(cases, new structures_1.ClassDefinition());
