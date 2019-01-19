"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "CLASS foobar IMPLEMENTATION.",
];
_utils_1.statementType(tests, "CLASS", Statements.ClassImplementation);
