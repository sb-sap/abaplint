"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements");
const tests = [
    "TYPES foo VALUE IS INITIAL.",
    "TYPES bar VALUE '1'.",
];
_utils_1.statementType(tests, "TYPE ENUM", Statements.TypeEnum);
