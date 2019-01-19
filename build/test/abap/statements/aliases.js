"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "ALIASES mo_files FOR lif_object~mo_files.",
];
_utils_1.statementType(tests, "ALIASES", Statements.Aliases);
