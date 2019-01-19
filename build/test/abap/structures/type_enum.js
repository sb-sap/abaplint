"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const structures_1 = require("../../../src/abap/structures");
const cases = [
    { abap: "TYPES BEGIN OF ENUM name STRUCTURE name2 BASE TYPE char01.\n" +
            "TYPES foo VALUE IS INITIAL.\n" +
            "TYPES bar VALUE '1'.\n" +
            "TYPES END OF ENUM name STRUCTURE name2.\n" },
    { abap: "TYPES: BEGIN OF ENUM name, foo, bar, END OF ENUM name." },
];
_utils_1.structureType(cases, new structures_1.TypeEnum());
