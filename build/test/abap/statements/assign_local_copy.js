"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "ASSIGN LOCAL COPY OF INITIAL LINE OF <table> TO <fs>.",
    "assign local copy of <lt_foo> to <lt_bar>.",
    "ASSIGN LOCAL COPY OF INITIAL (L_VAR) TO <WA>.",
    "ASSIGN LOCAL COPY OF INITIAL data[] TO <lt_data>.",
];
_utils_1.statementType(tests, "ASSIGN LOCAL COPY", Statements.AssignLocalCopy);
