"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "STATICS END OF foo.",
];
_utils_1.statementType(tests, "STATIC END", Statements.StaticEnd);
