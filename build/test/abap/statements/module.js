"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "MODULE user_command_2000 INPUT.",
    "MODULE pbo_2000 OUTPUT.",
    "MODULE okcode.",
];
_utils_1.statementType(tests, "MODULE", Statements.Module);
