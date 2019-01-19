"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combi_1 = require("../combi");
const tokens_1 = require("../tokens");
const _1 = require(".");
const message_type_and_number_1 = require("./message_type_and_number");
class MessageSource extends combi_1.Expression {
    getRunnable() {
        const msgid = combi_1.seq(combi_1.tok(tokens_1.ParenLeft), new _1.MessageClass(), combi_1.tok(tokens_1.ParenRightW));
        const simple = combi_1.seq(new message_type_and_number_1.MessageTypeAndNumber(), combi_1.opt(msgid));
        const mess1 = combi_1.seq(combi_1.str("ID"), new _1.Source(), combi_1.str("TYPE"), new _1.Source(), combi_1.str("NUMBER"), new _1.Source());
        return combi_1.alt(simple, mess1);
    }
}
exports.MessageSource = MessageSource;
