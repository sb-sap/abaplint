"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "READ DATASET filename INTO wa_rawdata LENGTH length.",
    "READ DATASET lv_filename INTO ls_data MAXIMUM LENGTH lv_max ACTUAL LENGTH lv_actual.",
    "read dataset filename into lv_content maximum length 300000 actual length lv_actual.",
];
_utils_1.statementType(tests, "READ DATASET", Statements.ReadDataset);
