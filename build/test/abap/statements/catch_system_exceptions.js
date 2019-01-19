"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "catch system-exceptions import_mismatch_errors = 1.",
];
_utils_1.statementType(tests, "CATCH SYSTEM-EXCEPTIONS", Statements.CatchSystemExceptions);
