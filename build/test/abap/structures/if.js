"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const structures_1 = require("../../../src/abap/structures");
const cases = [
    { abap: "IF foo = bar. ENDIF." },
    { abap: "IF foo = bar. WRITE 'bar'. ENDIF." },
    { abap: "IF foo = bar. ELSE. ENDIF." },
    { abap: "IF foo = bar. ELSEIF moo = boo. ENDIF." },
    { abap: "IF foo = bar. ELSEIF moo = boo. ELSE. ENDIF." },
    { abap: "IF foo = bar. ELSEIF moo = boo. ELSEIF boo = loo. ENDIF." },
];
_utils_1.structureType(cases, new structures_1.If());
