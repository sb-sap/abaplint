"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "break-point id foo.",
];
_utils_1.statementType(tests, "BREAK-POINT ID", Statements.BreakId);
