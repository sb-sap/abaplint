"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const structures_1 = require("../../../src/abap/structures");
const cases = [
    { abap: "DEFINE _macro. END-OF-DEFINITION." },
    { abap: "DEFINE _macro. WRITE bar. END-OF-DEFINITION." },
];
_utils_1.structureType(cases, new structures_1.Define());
