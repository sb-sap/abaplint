"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "DELETE FROM DATABASE lawdivindx(cu) ID 'LAW_CUSTOMER_CREDIT'.",
    "DELETE FROM DATABASE foo(ba) CLIENT sy-mandt ID key.",
    "DELETE FROM DATABASE /space/name(aa) ID lv_id.",
];
_utils_1.statementType(tests, "DELETE FROM DATABASE", Statements.DeleteCluster);
