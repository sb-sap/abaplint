"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SORT BY foo bar.",
    "SORT.",
];
_utils_1.statementType(tests, "SORT dataset", Statements.SortDataset);
