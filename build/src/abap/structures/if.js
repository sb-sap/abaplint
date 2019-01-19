"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statements = require("../statements");
const _structure_1 = require("./_structure");
const _combi_1 = require("./_combi");
const body_1 = require("./body");
const elseif_1 = require("./elseif");
const else_1 = require("./else");
class If extends _structure_1.Structure {
    getMatcher() {
        const contents = _combi_1.seq(_combi_1.opt(_combi_1.sub(new body_1.Body())), _combi_1.star(_combi_1.sub(new elseif_1.Elseif())), _combi_1.opt(_combi_1.sub(new else_1.Else())));
        return _combi_1.beginEnd(_combi_1.sta(Statements.If), contents, _combi_1.sta(Statements.EndIf));
    }
}
exports.If = If;
