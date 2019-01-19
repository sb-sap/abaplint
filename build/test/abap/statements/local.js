"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "LOCAL foo.",
    "LOCAL moo[].",
    "LOCAL foo-bar.",
];
_utils_1.statementType(tests, "LOCAL", Statements.Local);
