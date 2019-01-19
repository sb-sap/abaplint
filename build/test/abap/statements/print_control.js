"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "print-control index-line lv_line.",
    "print-control function 'ASDF'.",
];
_utils_1.statementType(tests, "PRINT-CONTROL", Statements.PrintControl);
