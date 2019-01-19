"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functional_writing_1 = require("../../src/rules/functional_writing");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "CALL METHOD zcl_class=>method( ).", cnt: 1 },
    { abap: "CalL METHOD zcl_class=>method( ).", cnt: 1 },
    { abap: "CALL METHOD (lv_class_name)=>jump.", cnt: 0 },
    { abap: "CALL METHOD mo_plugin->('SET_FILES').", cnt: 0 },
    { abap: "CALL METHOD (method_name) PARAMETER-TABLE parameters.", cnt: 0 },
    { abap: "CLASS ZCX_ABAPGIT_2FA_ERROR IMPLEMENTATION.\n" +
            "method CONSTRUCTOR.\n" +
            "CALL METHOD SUPER->CONSTRUCTOR\n" +
            "EXPORTING\n" +
            "TEXTID = TEXTID\n" +
            "PREVIOUS = PREVIOUS.\n" +
            "endmethod.\n" +
            "ENDCLASS.", cnt: 0 },
    { abap: "CLASS ZCL_NOT_AN_EXCEPTION IMPLEMENTATION.\n" +
            "method CONSTRUCTOR.\n" +
            "CALL METHOD SUPER->CONSTRUCTOR\n" +
            "EXPORTING\n" +
            "TEXTID = TEXTID\n" +
            "PREVIOUS = PREVIOUS.\n" +
            "endmethod.\n" +
            "ENDCLASS.", cnt: 1 },
];
_utils_1.testRule(tests, functional_writing_1.FunctionalWriting);
