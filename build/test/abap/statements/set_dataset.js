"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "SET DATASET l_file POSITION l_pos.",
];
_utils_1.statementType(tests, "SET DATASET", Statements.SetDataset);
