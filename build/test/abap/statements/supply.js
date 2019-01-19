"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SUPPLY foo = bar TO CONTEXT ctx.",
];
_utils_1.statementType(tests, "SUPPLY", Statements.Supply);
