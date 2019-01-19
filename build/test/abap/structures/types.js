"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const structures_1 = require("../../../src/abap/structures");
const cases = [
    { abap: "TYPES: BEGIN OF ty_foo, raw TYPE xstring, compressed_len TYPE i, END OF ty_foo." },
];
_utils_1.structureType(cases, new structures_1.Types());
