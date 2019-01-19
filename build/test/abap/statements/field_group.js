"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "FIELD-GROUPS test.",
];
_utils_1.statementType(tests, "FIELD GROUP", Statements.FieldGroup);
