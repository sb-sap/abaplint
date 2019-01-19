"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exit_or_check_1 = require("../../src/rules/exit_or_check");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "LOOP AT lt_usr02 INTO ls_usr02.\nEXIT.\nENDLOOP.", cnt: 0 },
    { abap: "EXIT.", cnt: 1 },
    { abap: "CHECK foo = bar.", cnt: 1 },
    { abap: "SELECT kunnr INTO lv_kunnr FROM kna1.\nCHECK sy-dbcnt > is_paging-skip.\nENDSELECT.", cnt: 0 },
];
_utils_1.testRule(tests, exit_or_check_1.ExitOrCheck);
