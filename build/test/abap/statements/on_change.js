"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "ON CHANGE OF structure-field.",
    "ON CHANGE OF gt_tab-field1 OR gt_tab-field2.",
];
_utils_1.statementType(tests, "ON CHANGE", Statements.OnChange);
