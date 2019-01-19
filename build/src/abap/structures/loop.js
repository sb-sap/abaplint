"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../statements");
const _structure_1 = require("./_structure");
const _combi_1 = require("./_combi");
const _1 = require(".");
class Loop extends _structure_1.Structure {
    getMatcher() {
        const body = _combi_1.alt(_combi_1.sub(new _1.Normal()), _combi_1.sub(new _1.OnChange()));
        return _combi_1.beginEnd(_combi_1.sta(Statements.Loop), _combi_1.star(body), _combi_1.sta(Statements.EndLoop));
    }
}
exports.Loop = Loop;
