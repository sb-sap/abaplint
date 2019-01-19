"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Combi = require("../../src/abap/combi");
const Tokens = require("../../src/abap/tokens");
const Expressions = require("../../src/abap/expressions");
const position_1 = require("../../src/position");
const str = Combi.str;
const seq = Combi.seq;
const opt = Combi.opt;
const star = Combi.star;
function tok(s) {
    const split = s.split(" ");
    const tokens = [];
    for (const st of split) {
        tokens.push(new Tokens.Identifier(new position_1.Position(10, 10), st));
    }
    return tokens;
}
function res(s) {
    return new Combi.Result(tok(s));
}
const resultSize = [
    { c: str("TEST"), in: [res("")], len: 0 },
    { c: str("TEST"), in: [res("TEST")], len: 1 },
    { c: str("TEST"), in: [res("FOO")], len: 0 },
    { c: str("TEST"), in: [res("FOO"), res("TEST")], len: 1 },
    { c: seq(str("TEST"), str("FOO")), in: [res("TEST FOO")], len: 1 },
    { c: seq(str("TEST"), str("FOO")), in: [res("TEST BAR")], len: 0 },
    { c: seq(str("TEST"), str("FOO")), in: [res("TEST FOO"), res("TEST BAR")], len: 1 },
    { c: star(str("TEST")), in: [res("TEST TEST TEST")], len: 4 },
    { c: star(seq(str("TEST"), str("FOO"))), in: [res("TEST FOO")], len: 2 },
    { c: star(seq(str("TEST"), str("FOO"))), in: [res("TEST FOO"), res("ASDF")], len: 3 },
    { c: opt(str("TEST")), in: [res("TEST")], len: 2 },
    { c: star(new Expressions.ParameterListS()), in: [res("TEST")], len: 1 },
    { c: star(new Expressions.ParameterListS()), in: [res("TEST BOO MOO")], len: 1 },
    { c: star(new Expressions.ParameterListS()), in: [res("TEST = MOO")], len: 2 },
    { c: seq(str("TEST"), new Expressions.Source()), in: [res("TEST MOO")], len: 1 },
    { c: new Expressions.ParameterS(), in: [res("TEST = MOO")], len: 1 },
    { c: new Expressions.Source(), in: [res("TEST")], len: 1 },
    { c: new Expressions.FieldChain(), in: [res("TEST")], len: 1 },
];
describe("combi Result size", () => {
    resultSize.forEach((test) => {
        it(test.c.toStr() + " should be size " + test.len, () => {
            const result = test.c.run(test.in);
            chai_1.expect(result.length).to.equals(test.len);
        });
    });
});
