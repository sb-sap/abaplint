"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "CLASS lcl_gui DEFINITION DEFERRED.",
    "CLASS zcl_abapgit_xml_output DEFINITION LOCAL FRIENDS ltcl_xml_output.",
    "CLASS /foo/cl_bar DEFINITION LOCAL FRIENDS LCL_/foo/bar.",
    "CLASS zcl_aoc_super DEFINITION LOCAL FRIENDS ltcl_test.",
    "CLASS zcl_foo DEFINITION DEFERRED PUBLIC.",
    "CLASS LCL_/foo/bar DEFINITION DEFERRED.",
];
_utils_1.statementType(tests, "CLASS other", Statements.ClassOther);
