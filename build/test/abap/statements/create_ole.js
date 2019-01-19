"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "CREATE OBJECT cv_ole_app lv_ole_app.",
];
_utils_1.statementType(tests, "CREATE OBJECT", Statements.CreateOLE);
