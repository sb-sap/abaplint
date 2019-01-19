"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _structure_1 = require("./_structure");
const _combi_1 = require("./_combi");
const Statements = require("../statements");
const body_1 = require("./body");
class Else extends _structure_1.Structure {
    getMatcher() {
        const body = _combi_1.opt(_combi_1.sub(new body_1.Body()));
        const elseif = _combi_1.seq(_combi_1.sta(Statements.Else), body);
        return elseif;
    }
}
exports.Else = Else;
