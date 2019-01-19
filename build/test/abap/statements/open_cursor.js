"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "OPEN CURSOR WITH HOLD l_db_cursor FOR SELECT mandt objct FROM usr12 WHERE mandt = lv_mandt.",
    "open cursor l_cursor for select * from ztab.",
    "OPEN CURSOR WITH HOLD mv_cursor FOR SELECT (iv_select) FROM (iv_from) WHERE (iv_where) GROUP BY (iv_group) ORDER BY (iv_order).",
];
_utils_1.statementType(tests, "OPEN CURSOR", Statements.OpenCursor);
