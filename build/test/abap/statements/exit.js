"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "EXIT.",
    "exit from step-loop.",
];
_utils_1.statementType(tests, "EXIT", Statements.Exit);
