"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "CALL SELECTION-SCREEN 1001.",
    "CALL SELECTION-SCREEN DYNNR STARTING AT 5 5 ENDING AT 60 8.",
    "CALL SELECTION-SCREEN 200 STARTING AT 5 15.",
    "CALL SELECTION-SCREEN '1100' USING SELECTION-SET foo-variant.",
];
_utils_1.statementType(tests, "CALL SELECTION-SCREEN", Statements.CallSelectionScreen);
