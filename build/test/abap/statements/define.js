"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "DEFINE foo.",
    "DEFINE foo-bar.",
    "DEFINE bar%foo.",
    "define macro>.",
    "DEFINE ?macro?.",
];
_utils_1.statementType(tests, "DEFINE", Statements.Define);
