"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exporting_1 = require("../../src/rules/exporting");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "zcl_class=>methodname( EXPORTING iv_foo = '23' ).", cnt: 1 },
    { abap: "zcl_class=>methodname( iv_foo = '23' ).", cnt: 0 },
];
_utils_1.testRule(tests, exporting_1.Exporting);
