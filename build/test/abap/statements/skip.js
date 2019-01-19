"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SKIP.",
    "SKIP TO LINE 12.",
    "SKIP 1.",
];
_utils_1.statementType(tests, "SKIP", Statements.Skip);
