"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SET EXTENDED CHECK OFF.",
    "SET EXTENDED CHECK ON.",
];
_utils_1.statementType(tests, "SET EXTENDED CHECK", Statements.SetExtendedCheck);
