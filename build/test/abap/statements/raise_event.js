"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "RAISE EVENT message.",
    "RAISE EVENT message EXPORTING p_kind    = c_error p_test    = c_my_name.",
];
_utils_1.statementType(tests, "RAISE EVENT", Statements.RaiseEvent);
