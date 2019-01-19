"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const message_1 = require("../../../src/abap/types/message");
describe("Types, Message", () => {
    it("Count placeholders, 4 expected", () => {
        const msg = new message_1.Message("000", "& & & &");
        chai_1.expect(msg.getPlaceholderCount()).to.equal(4);
    });
    it("Count placeholders, 2 expected", () => {
        const msg = new message_1.Message("000", "moo &1 &2 foo");
        chai_1.expect(msg.getPlaceholderCount()).to.equal(2);
    });
    it("Count placeholders, 0 expected", () => {
        const msg = new message_1.Message("000", "hello world");
        chai_1.expect(msg.getPlaceholderCount()).to.equal(0);
    });
});
