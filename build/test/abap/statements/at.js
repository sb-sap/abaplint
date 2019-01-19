"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "AT FIRST.",
    "AT NEW field.",
    "AT END OF field.",
    "AT LAST.",
    "AT NEW (ls_foo-field).",
    "AT END OF (ls_foo-field).",
    "AT NEW <foo>.",
    "AT END OF <bar>.",
    "AT group.",
    "AT END OF field(10).",
    "AT NEW field+4(2).",
];
_utils_1.statementType(tests, "AT", Statements.At);
