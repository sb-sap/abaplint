"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "COMMIT WORK.",
    "COMMIT WORK AND WAIT.",
    "commit connection (lv_name).",
    "commit connection lv_con.",
];
_utils_1.statementType(tests, "COMMIT", Statements.Commit);
