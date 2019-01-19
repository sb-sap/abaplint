"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SET LEFT SCROLL-BOUNDARY.",
    "SET LEFT SCROLL-BOUNDARY COLUMN 002.",
];
_utils_1.statementType(tests, "SET LEFT", Statements.SetLeft);
