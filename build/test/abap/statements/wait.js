"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _utils_1 = require("../_utils");
const Statements = require("../../../src/abap/statements/");
const version_1 = require("../../../src/version");
const tests = [
    "WAIT UP TO 1 SECONDS.",
    "WAIT UNTIL foo >= bar.",
    "WAIT UNTIL foo >= bar UP TO 1 SECONDS.",
    "WAIT FOR MESSAGING CHANNELS UNTIL foobar = abap_true UP TO 10 SECONDS.",
    "WAIT FOR ASYNCHRONOUS TASKS UNTIL mv_tasks_running < mv_max_tasks.",
];
_utils_1.statementType(tests, "WAIT", Statements.Wait);
const versions = [
    { abap: "WAIT FOR PUSH CHANNELS UNTIL ms_message IS NOT INITIAL UP TO iv_timeout SECONDS.", ver: version_1.Version.v750 },
];
_utils_1.statementVersion(versions, "WAIT", Statements.Wait);
