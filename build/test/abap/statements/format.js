"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "FORMAT COLOR lv_col.",
    "format color lv_col intensified off.",
    "format color lv_col intensified on.",
    "FORMAT COLOR lv_col INTENSIFIED HOTSPOT OFF.",
    "FORMAT COLOR lv_col ON.",
    "format color off intensified off inverse off hotspot off input off.",
    "format intensified = 0 color = 0 inverse = 0.",
    "FORMAT FRAMES OFF.",
    "FORMAT COLOR lv_col INVERSE.",
    "FORMAT COLOR 3 INTENSIFIED.",
    "FORMAT COLOR col_foo OFF.",
    "FORMAT INTENSIFIED OFF.",
    "FORMAT HOTSPOT.",
];
_utils_1.statementType(tests, "FORMAT", Statements.Format);
