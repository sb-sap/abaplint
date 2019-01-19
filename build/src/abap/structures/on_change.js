"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../statements");
const _structure_1 = require("./_structure");
const _combi_1 = require("./_combi");
const normal_1 = require("./normal");
class OnChange extends _structure_1.Structure {
    getMatcher() {
        return _combi_1.beginEnd(_combi_1.sta(Statements.OnChange), _combi_1.star(_combi_1.sub(new normal_1.Normal())), _combi_1.sta(Statements.EndOn));
    }
}
exports.OnChange = OnChange;
