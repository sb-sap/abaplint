"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const tests = [
    "CALL TRANSACTION 'FOO'.",
    "CALL TRANSACTION 'FOO' AND SKIP FIRST SCREEN.",
    "CALL TRANSACTION 'FOO' WITH AUTHORITY-CHECK AND SKIP FIRST SCREEN.",
    "CALL TRANSACTION 'FOO' WITH AUTHORITY-CHECK USING lt_bdcdata MODE lv_mode.",
    "CALL TRANSACTION 'FOO' WITH AUTHORITY-CHECK USING bdcdata OPTIONS FROM opt.",
    "CALL TRANSACTION 'FOO' USING BDCDATA MODE 'E' UPDATE 'A'.",
    "CALL TRANSACTION 'FOO' USING BDCDATA MODE lv_mode MESSAGES INTO lt_messages.",
    "CALL TRANSACTION 'FOO' WITHOUT AUTHORITY-CHECK USING lt_data OPTIONS FROM ls_opt MESSAGES INTO lt_mess.",
    "CALL TRANSACTION 'FOO' USING mt_bdcdata UPDATE 'S' MODE 'E'.",
    "CALL TRANSACTION 'ZA01' USING gt_bdcdata MESSAGES INTO lt_msg MODE l_mode UPDATE 'S'.",
    "CALL TRANSACTION 'ZA02' USING gt_bdcdata MESSAGES INTO lt_msg OPTIONS FROM l_options.",
];
_utils_1.statementType(tests, "CALL TRANSACTION", Statements.CallTransaction);
