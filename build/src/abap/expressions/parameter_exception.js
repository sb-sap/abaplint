"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const _1 = require("./");
class ParameterException extends combi_1.Expression {
    getRunnable() {
        return combi_1.seq(new _1.ParameterName(), combi_1.str("="), 
        //               alt(new Constant, new FieldSub(), new FieldChain()),
        new _1.SimpleName(), combi_1.opt(combi_1.seq(combi_1.str("MESSAGE"), new _1.Target())));
    }
}
exports.ParameterException = ParameterException;
