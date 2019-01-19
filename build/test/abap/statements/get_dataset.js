"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "get dataset p_filename position lv_size.",
    "GET DATASET me->mv_file ATTRIBUTES ls_attr.",
];
_utils_1.statementType(tests, "GET DATASET", Statements.GetDataset);
