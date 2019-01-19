"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "CLASS-DATA BEGIN OF blah READ-ONLY.",
];
_utils_1.statementType(tests, "CLASS DATA BEGIN", Statements.ClassDataBegin);
