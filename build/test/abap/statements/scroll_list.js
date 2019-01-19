"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SCROLL LIST INDEX lv_index TO FIRST PAGE LINE lv_line.",
    "SCROLL LIST INDEX sy-lsind TO PAGE sy-cpage LINE sy-staro.",
    "scroll list to last page line lv_line.",
    "scroll list to first page.",
    "scroll list backward.",
    "scroll list forward.",
    "SCROLL LIST TO FIRST PAGE INDEX SY-LSIND.",
    "SCROLL LIST INDEX sy-lsind TO COLUMN sy-staco.",
];
_utils_1.statementType(tests, "SCROLL LIST", Statements.ScrollList);
