"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "CASE foobar.",
    "CASE TYPE OF typedescr.",
];
_utils_1.statementType(tests, "CASE", Statements.Case);
