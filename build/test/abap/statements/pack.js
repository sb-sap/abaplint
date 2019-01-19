"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "PACK foo TO bar.",
];
_utils_1.statementType(tests, "PACK", Statements.Pack);
