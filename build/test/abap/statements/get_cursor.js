"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "GET CURSOR FIELD f LINE l.",
    "get cursor line l.",
    "GET CURSOR OFFSET off.",
    "GET CURSOR FIELD gv_field.",
    "GET CURSOR LINE lin OFFSET off VALUE val LENGTH len.",
    "GET CURSOR FIELD lv_field AREA lv_ara.",
    "get cursor line L_LIST_CURSOR_LINE display offset L_LIST_CURSOR_POS.",
];
_utils_1.statementType(tests, "GET CURSOR", Statements.GetCursor);
