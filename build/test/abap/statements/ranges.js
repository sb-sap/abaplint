"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "ranges l_prot_only for smodilog-prot_only.",
    "RANGES moo FOR foo-bar OCCURS 50.",
    "RANGES $tadir$ FOR tadir-devclass OCCURS 10.",
];
_utils_1.statementType(tests, "RANGES", Statements.Ranges);
