"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "set user-command 'ASDF'.",
];
_utils_1.statementType(tests, "SET USER-COMMAND", Statements.SetUserCommand);
