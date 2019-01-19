"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "ADD-CORRESPONDING foo TO bar.",
];
_utils_1.statementType(tests, "ADD-CORRESPONDING", Statements.AddCorresponding);
