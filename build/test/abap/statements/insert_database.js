"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "INSERT tactz FROM TABLE lt_tactz.",
    "INSERT zfoo.",
    "INSERT INTO zuser VALUES ls_user.",
    "INSERT zfoo CLIENT SPECIFIED.",
    "INSERT INTO ztable client specified VALUES ls_values.",
    "insert zdata from table lt_table accepting duplicate keys.",
    "INSERT (c_tabname) FROM ls_foobar.",
    "INSERT (c_tabname) CLIENT SPECIFIED FROM TABLE lt_table.",
    "INSERT (mv_tabname) CONNECTION default FROM ig_row.",
    "INSERT (mv_tabname) CONNECTION (mv_connection_key) FROM ig_row.",
    "insert into ztable client specified connection (l_db) values entry.",
    "INSERT ztable FROM TABLE @lt_data.",
];
_utils_1.statementType(tests, "INSERT", Statements.InsertDatabase);
