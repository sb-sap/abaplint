"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "top-of-page.",
    "top-of-page during line-selection.",
];
_utils_1.statementType(tests, "TOP-OF-PAGE", Statements.TopOfPage);
