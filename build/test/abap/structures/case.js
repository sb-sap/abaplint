"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const structures_1 = require("../../../src/abap/structures");
const cases = [
    { abap: "CASE moo. ENDCASE." },
    { abap: "CASE moo. WHEN 2. ENDCASE." },
    { abap: "CASE moo. WHEN OTHERS. ENDCASE." },
    { abap: "CASE moo. WHEN 2. WRITE 'foo'. ENDCASE." },
    { abap: "CASE moo. WHEN 2. WRITE 'foo'. WRITE 'bar'. ENDCASE." },
    { abap: "CASE moo. WHEN 2. WHEN 3. ENDCASE." },
];
_utils_1.structureType(cases, new structures_1.Case());
