"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "break-point.",
    "BREAK-POINT AT NEXT APPLICATION STATEMENT.",
    "break username.",
    "BREAK-POINT lv_logtxt.",
];
_utils_1.statementType(tests, "BREAK-POINT", Statements.Break);
