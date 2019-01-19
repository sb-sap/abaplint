"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "CLASS zcl_foo_super DEFINITION LOAD.",
];
_utils_1.statementType(tests, "CLASS Definition Load", Statements.ClassDefinitionLoad);
