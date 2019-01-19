"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SET TITLEBAR 'TITLE'.",
    "SET TITLEBAR 'TITLE_2000' WITH text-t08.",
    "set titlebar 'T00' with field1 field2.",
    "SET TITLEBAR 'TITLE_3000' OF PROGRAM sy-cprog WITH text-001.",
];
_utils_1.statementType(tests, "SET TITLEBAR", Statements.SetTitlebar);
