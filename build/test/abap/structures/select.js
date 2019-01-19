"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const structures_1 = require("../../../src/abap/structures");
const cases = [
    { abap: "SELECT * FROM zfoo INTO ls_area. EXIT. ENDSELECT." },
];
_utils_1.structureType(cases, new structures_1.Select());
