"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "CLEAR foobar.",
    "CLEAR cg_value+sy-fdpos.",
    "CLEAR fontx-color WITH 'X'.",
    "CLEAR me->zif_foo~field.",
    "clear ld_data_changes with abap_true in character mode.",
    "CLEAR ct_source[].",
    "CLEAR value+l_pos(*).",
    "CLEAR <l_byte> WITH byte IN BYTE MODE.",
    "CLEAR $foo$.",
];
_utils_1.statementType(tests, "CLEAR", Statements.Clear);
