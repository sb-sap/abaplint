"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "PROGRAM zfoobar.",
    "PROGRAM zfoobar MESSAGE-ID 01 LINE-SIZE 132.",
    "PROGRAM zfoobar MESSAGE-ID 01 NO STANDARD PAGE HEADING LINE-SIZE 132.",
    "PROGRAM zbar LINE-COUNT 70.",
    "PROGRAM.",
];
_utils_1.statementType(tests, "PROGRAM", Statements.Program);
