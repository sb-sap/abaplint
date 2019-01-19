"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "EXEC SQL.",
    "EXEC SQL PERFORMING name.",
];
_utils_1.statementType(tests, "EXEC SQL", Statements.ExecSQL);
