"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "add 2 to lv_foo.",
    "add zcl_class=>c_diagonal to lo_foo->mode.",
];
_utils_1.statementType(tests, "ADD", Statements.Add);
