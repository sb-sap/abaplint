"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "INTERFACE lif_gui_page.",
    "interface ZIF_something public.",
];
_utils_1.statementType(tests, "INTERFACE", Statements.Interface);
