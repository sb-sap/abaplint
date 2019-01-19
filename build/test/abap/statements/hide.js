"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "HIDE gv_field.",
];
_utils_1.statementType(tests, "HIDE", Statements.Hide);
