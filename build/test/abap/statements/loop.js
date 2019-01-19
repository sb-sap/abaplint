"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const version_1 = require("../../../src/version");
const tests = [
    "loop at foo.",
    "loop at foo into bar.",
    "LOOP AT lt_lines ASSIGNING <ls_line>.",
    "LOOP AT lt_branches FROM 1 ASSIGNING <ls_branch>.",
    "LOOP AT mt_diff TRANSPORTING NO FIELDS.",
    "LOOP AT mt_diff TRANSPORTING NO FIELDS WHERE foo = bar.",
    "LOOP AT it_methods ASSIGNING <ls_method2> FROM lv_index.",
    "LOOP AT it_tokens ASSIGNING <ls_token> FROM sdf TO to.",
    "LOOP AT lt_lines ASSIGNING <ls_line> WHERE moo = boo.",
    "LOOP AT it_order REFERENCE INTO foo.",
    "LOOP AT lt_catalog INTO ls_component USING KEY is_key WHERE is_key = abap_true.",
    "loop at it_foo assigning <bar> casting.",
    "loop at lt_data into <ls_data> where (condition).",
    "LOOP.",
    "LOOP AT itab INTO wa GROUP BY wa-column.",
    "LOOP AT GROUP group INTO member.",
    "LOOP AT itab INTO DATA(wa) GROUP BY ( sy-tabix - 1 ) DIV n + 1.",
    "LOOP AT <tab> ASSIGNING <data> USING KEY (lv_name) WHERE (lv_where).",
    "LOOP AT lt_compiler INTO ls_compiler WHERE statement->source_info->name = lv_include.",
];
_utils_1.statementType(tests, "LOOP", Statements.Loop);
const versions = [
    { abap: "LOOP AT lt_packages ASSIGNING FIELD-SYMBOL(<package>).", ver: version_1.Version.v740sp02 },
    { abap: "LOOP AT hierarchy ASSIGNING <h> GROUP BY ( parent = <h>-parent ).", ver: version_1.Version.v740sp08 },
];
_utils_1.statementVersion(versions, "LOOP", Statements.Loop);
