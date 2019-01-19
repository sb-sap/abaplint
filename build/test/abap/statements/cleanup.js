"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "CLEANUP INTO l_cx.",
    "CLEANUP.",
];
_utils_1.statementType(tests, "CLEANUP", Statements.Cleanup);
