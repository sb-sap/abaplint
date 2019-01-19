"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "EXPORT DYNPRO H F E M ID KEY.",
];
_utils_1.statementType(tests, "EXPORT DYNPRO", Statements.ExportDynpro);
