"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "CONTROLS tctrl TYPE TABLEVIEW USING SCREEN 200.",
    "CONTROLS tstrip TYPE TABSTRIP.",
];
_utils_1.statementType(tests, "CONTROLS", Statements.Controls);
