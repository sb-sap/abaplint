"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "ULINE.",
    "ULINE (92).",
    "ULINE /(80).",
    "ULINE /1(76).",
    "ULINE AT /.",
    "ULINE AT (c_line_size).",
    "ULINE AT /1(80) .",
    "ULINE AT 3(12).",
    "ULINE AT /(right).",
    "ULINE /10.",
];
_utils_1.statementType(tests, "ULINE", Statements.Uline);
