"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "TYPES BEGIN OF ENUM name STRUCTURE name2 BASE TYPE char01.",
];
_utils_1.statementType(tests, "TYPE BEGIN ENUM", Statements.TypeEnumBegin);
