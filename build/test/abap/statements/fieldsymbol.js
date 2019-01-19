"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "field-symbol <foo> type c.",
];
_utils_1.statementType(tests, "FIELD-SYMBOL", Statements.FieldSymbol);
