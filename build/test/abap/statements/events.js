"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "EVENTS foobar.",
    "events CHANGE_PRESSED exporting value(index) type i.",
    "class-events foo exporting value(CONTEXT) type blah.",
    "EVENTS checkbox_click EXPORTING VALUE(ev_value) TYPE abap_bool OPTIONAL.",
];
_utils_1.statementType(tests, "EVENTS", Statements.Events);
