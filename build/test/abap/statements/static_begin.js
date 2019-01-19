"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "STATICS BEGIN OF foo.",
    "STATICS BEGIN OF foo OCCURS 0.",
];
_utils_1.statementType(tests, "STATIC BEGIN", Statements.StaticBegin);
