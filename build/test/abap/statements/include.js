"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "INCLUDE zabapgit_gui_pages_userexit IF FOUND.",
    "INCLUDE <OBJECT>.",
    "INCLUDE ZFOO-BAR.",
    "INCLUDE zabapgit_gui_router.",
];
_utils_1.statementType(tests, "INCLUDE", Statements.Include);
