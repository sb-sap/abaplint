"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SPLIT iv_data AT gc_newline INTO TABLE lt_result.",
    "SPLIT iv_data AT gc_newline INTO TABLE lt_result IN CHARACTER MODE.",
    "SPLIT ls_raw-body AT gc_newline INTO ls_commit-message lv_trash.",
];
_utils_1.statementType(tests, "SPLIT", Statements.Split);
