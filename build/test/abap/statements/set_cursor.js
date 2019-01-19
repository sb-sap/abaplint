"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SET CURSOR FIELD 'ASDF'.",
    "SET CURSOR FIELD 'ASDF' LINE 1.",
    "set cursor lv_col lv_row.",
    "SET CURSOR FIELD name OFFSET pos.",
];
_utils_1.statementType(tests, "SET CURSOR", Statements.SetCursor);
