"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "IMPORT DYNPRO ls_h lt_f lt_e lt_m ID ls_dynp_id.",
];
_utils_1.statementType(tests, "IMPORT DYNPRO", Statements.ImportDynpro);
