"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../statements");
const _structure_1 = require("./_structure");
const _combi_1 = require("./_combi");
const normal_1 = require("./normal");
const catch_1 = require("./catch");
class Try extends _structure_1.Structure {
    getMatcher() {
        const normal = _combi_1.star(_combi_1.sub(new normal_1.Normal()));
        const cleanup = _combi_1.seq(_combi_1.sta(Statements.Cleanup), normal);
        const block = _combi_1.seq(normal, _combi_1.star(_combi_1.sub(new catch_1.Catch())), _combi_1.opt(cleanup));
        return _combi_1.beginEnd(_combi_1.sta(Statements.Try), block, _combi_1.sta(Statements.EndTry));
    }
}
exports.Try = Try;
