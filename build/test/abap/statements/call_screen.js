"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "CALL SCREEN 0011.",
    "CALL SCREEN 3000 STARTING AT 10 2.",
    "CALL SCREEN '0900' STARTING AT 25 5 ENDING AT gv_end_spalte gv_end_zeile.",
];
_utils_1.statementType(tests, "CALL SCREEN", Statements.CallScreen);
