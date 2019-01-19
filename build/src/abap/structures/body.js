"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _structure_1 = require("./_structure");
const _combi_1 = require("./_combi");
const normal_1 = require("./normal");
class Body extends _structure_1.Structure {
    getMatcher() {
        // todo, this should be a "plus" instead, however its not implemented yet
        return _combi_1.star(_combi_1.sub(new normal_1.Normal()));
    }
}
exports.Body = Body;
