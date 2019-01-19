"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SET MARGIN 1 5.",
];
_utils_1.statementType(tests, "SET MARGIN", Statements.SetMargin);
