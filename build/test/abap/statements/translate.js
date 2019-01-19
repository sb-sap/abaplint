"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "TRANSLATE rv_package USING '/_'.",
    "translate lv_foo to upper case.",
];
_utils_1.statementType(tests, "TRANSLATE", Statements.Translate);
