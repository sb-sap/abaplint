"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../statements");
const _structure_1 = require("./_structure");
const _statement_1 = require("../statements/_statement");
const _combi_1 = require("./_combi");
class ExecSQL extends _structure_1.Structure {
    getMatcher() {
        return _combi_1.beginEnd(_combi_1.sta(Statements.ExecSQL), _combi_1.star(_combi_1.sta(_statement_1.NativeSQL)), _combi_1.sta(Statements.EndExec));
    }
}
exports.ExecSQL = ExecSQL;
