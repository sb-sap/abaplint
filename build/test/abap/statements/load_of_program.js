"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "LOAD-OF-PROGRAM.",
];
_utils_1.statementType(tests, "LOAD-OF-PROGRAM", Statements.LoadOfProgram);
