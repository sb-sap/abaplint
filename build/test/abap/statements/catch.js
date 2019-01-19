"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "catch cx_foo.",
    "CATCH cx_pak_invalid_data cx_pak_invalid_state.",
    "CATCH /foo/cx_bar INTO lr_/foo/cx_bar.",
];
_utils_1.statementType(tests, "CATCH", Statements.Catch);
