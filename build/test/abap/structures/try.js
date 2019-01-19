"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const structures_1 = require("../../../src/abap/structures");
const cases = [
    { abap: "TRY. ENDTRY." },
    { abap: "TRY. CATCH cx_moo. ENDTRY." },
    { abap: "TRY. CATCH cx_moo. CATCH cx_boo. ENDTRY." },
    { abap: "TRY. CATCH cx_moo. CLEANUP. ENDTRY." },
    { abap: "TRY. CLEANUP. ENDTRY." },
    { abap: "TRY. WRITE bar. CATCH cx_moo. WRITE bar. ENDTRY." },
];
_utils_1.structureType(cases, new structures_1.Try());
