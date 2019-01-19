"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const structures_1 = require("../../../src/abap/structures");
const cases = [
    { abap: "INTERFACE if_foo PUBLIC. ENDINTERFACE." },
    { abap: "INTERFACE if_foo PUBLIC. INTERFACES if_bar. ENDINTERFACE." },
    { abap: "INTERFACE if_foo PUBLIC. INTERFACES if_bar. ALIASES moo FOR if_bar~moo. ENDINTERFACE." },
];
_utils_1.structureType(cases, new structures_1.Interface());
