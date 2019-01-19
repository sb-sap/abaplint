"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "DATA end of foo.",
    "DATA END OF COMMON PART.",
    "DATA END OF COMMON PART foobar.",
    "DATA END OF status_/foo/bar.",
    "DATA END OF /foo/bar.",
];
_utils_1.statementType(tests, "DATA END", Statements.DataEnd);
