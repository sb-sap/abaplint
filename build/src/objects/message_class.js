"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _abstract_object_1 = require("./_abstract_object");
const message_1 = require("../abap/types/message");
const xmljs = require("xml-js");
const xml_utils_1 = require("../xml_utils");
class MessageClass extends _abstract_object_1.AbstractObject {
    getType() {
        return "MSAG";
    }
    getMessages() {
        const xml = this.getXML();
        if (xml === undefined) {
            return [];
        }
        const parsed = xmljs.xml2js(xml, { compact: true });
        return this.parse(parsed);
    }
    parse(data) {
        const ret = [];
        const t100 = data.abapGit["asx:abap"]["asx:values"].T100;
        for (const msg of xml_utils_1.xmlToArray(t100.T100)) {
            ret.push(new message_1.Message(msg.MSGNR._text, msg.TEXT ? msg.TEXT._text : ""));
        }
        return ret;
    }
    getByNumber(num) {
        for (const message of this.getMessages()) {
            if (message.getNumber() === num) {
                return message;
            }
        }
        return undefined;
    }
    getXML() {
        for (const file of this.getFiles()) {
            if (file.getFilename().match(/\.msag\.xml$/i)) {
                return file.getRaw();
            }
        }
        return undefined;
    }
}
exports.MessageClass = MessageClass;
