"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const definitions_top_1 = require("../../src/rules/definitions_top");
const _utils_1 = require("./_utils");
const tests = [
    { abap: "FORM foobar.\ndata: lt_file type foo.\nwrite 'hello'.\nDATA int type i.\nENDFORM.", cnt: 1 },
    { abap: "FORM foobar.\ndata: lt_file type foo.\nDATA int type i.\nwrite 'hello'.\nENDFORM.", cnt: 0 },
    { abap: "FORM foo.\nTYPES: BEGIN OF ty_sort,\nsort TYPE string,\nEND OF ty_sort.\nENDFORM.", cnt: 0 },
    { abap: "FORM foo.\nDATA: BEGIN OF ls_sort,\nsort TYPE string,\nEND OF ls_sort.\nENDFORM.", cnt: 0 },
    { abap: "FORM foo.\nSTATICS: BEGIN OF ss_cached_client,\nusername TYPE string,\n" +
            "END OF ss_cached_client.\nDATA: lv_http_code TYPE i.\nENDFORM.", cnt: 0 },
    { abap: "FORM foo.\nTYPES: BEGIN OF lty_color_line,\ncolor TYPE lvc_t_scol.\n" +
            "INCLUDE TYPE gty_status.\nTYPES: END OF lty_color_line.\nENDFORM.", cnt: 0 },
];
_utils_1.testRule(tests, definitions_top_1.DefinitionsTop);
