"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "FETCH NEXT CURSOR lv_cursor INTO TABLE lt_table PACKAGE SIZE lv_size.",
    "FETCH NEXT CURSOR cur INTO ls_record.",
    "FETCH NEXT CURSOR c INTO CORRESPONDING FIELDS OF TABLE lt_table PACKAGE SIZE 10000.",
    "FETCH NEXT CURSOR c APPENDING CORRESPONDING FIELDS OF TABLE lt_tab PACKAGE SIZE iv_size.",
    "FETCH NEXT CURSOR c INTO CORRESPONDING FIELDS OF TABLE lt_result.",
    "FETCH NEXT CURSOR c INTO CORRESPONDING FIELDS OF <wa>.",
    "FETCH NEXT CURSOR l_cursor INTO lt_data PACKAGE SIZE 1000.",
];
_utils_1.statementType(tests, "FETCH NEXT", Statements.FetchNext);
