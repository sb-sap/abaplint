"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const line_only_punc_1 = require("../../src/rules/line_only_punc");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "zcl_class=>method(\n).", cnt: 1 },
    { abap: "WRITE 'hello'\n.", cnt: 1 },
    { abap: "CALL METHOD SUPER->CONSTRUCTOR\nEXPORTING\nPREVIOUS = PREVIOUS\n.", cnt: 1 },
    { abap: "WRITE 'hello'.", cnt: 0 },
];
_utils_1.testRule(tests, line_only_punc_1.LineOnlyPunc);
