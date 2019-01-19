"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "CLOSE DATASET lv_default_file_name.",
    "CLOSE DATASET me->mv_file.",
    "close dataset 'file.xml'.",
];
_utils_1.statementType(tests, "CLOSE", Statements.CloseDataset);
