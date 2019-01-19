"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SET BLANK LINES ON.",
    "SET BLANK LINES OFF.",
];
_utils_1.statementType(tests, "SET BLANK", Statements.SetBlank);
