"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "INFOTYPES 1000.",
];
_utils_1.statementType(tests, "INFOTYPES", Statements.Infotypes);
