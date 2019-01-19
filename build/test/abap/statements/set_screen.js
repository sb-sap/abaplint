"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SET SCREEN 0001.",
];
_utils_1.statementType(tests, "SET SCREEN", Statements.SetScreen);
