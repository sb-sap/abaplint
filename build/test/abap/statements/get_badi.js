"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "GET BADI lo_foobar.",
    "GET BADI lo_foobar FILTERS foo = bar.",
    "GET BADI l_badi CONTEXT me.",
    "GET BADI r_badi TYPE (iv_name).",
    "GET BADI lo_badi TYPE (iv_badi_name) FILTERS foo = bar.",
];
_utils_1.statementType(tests, "GET BADI", Statements.GetBadi);
