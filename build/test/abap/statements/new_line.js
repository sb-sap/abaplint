"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "NEW-LINE.",
    "NEW-LINE SCROLLING.",
    "NEW-LINE NO-SCROLLING.",
];
_utils_1.statementType(tests, "NEW-LINE", Statements.NewLine);
