"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const structures_1 = require("../../../src/abap/structures");
const cases = [
    { abap: "LOOP AT tab INTO stru. ENDLOOP." },
    { abap: "LOOP AT tab INTO stru. WRITE bar. ENDLOOP." },
];
_utils_1.structureType(cases, new structures_1.Loop());
