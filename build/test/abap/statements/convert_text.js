"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "CONVERT TEXT foo-text INTO SORTABLE CODE foo-xtext.",
];
_utils_1.statementType(tests, "CONVERT TEXT", Statements.ConvertText);
