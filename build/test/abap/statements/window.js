"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "WINDOW STARTING AT 1 1 ENDING AT 2 2.",
];
_utils_1.statementType(tests, "WINDOW", Statements.Window);
