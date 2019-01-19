"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "FIELDS TEXT-000.",
];
_utils_1.statementType(tests, "FIELDS", Statements.Fields);
