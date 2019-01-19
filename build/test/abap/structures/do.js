"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const structures_1 = require("../../../src/abap/structures");
const cases = [
    { abap: "DO 2 TIMES. ENDDO." },
    { abap: "DO 2 TIMES. WRITE bar. ENDDO." },
];
_utils_1.structureType(cases, new structures_1.Do());
