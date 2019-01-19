"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "DELETE DATASET l_psepath.",
];
_utils_1.statementType(tests, "DELETE DATASET", Statements.DeleteDataset);
