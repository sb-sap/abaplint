"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _abstract_object_1 = require("./_abstract_object");
const xmljs = require("xml-js");
const xml_utils_1 = require("../xml_utils");
class Table extends _abstract_object_1.AbstractObject {
    getType() {
        return "TABL";
    }
    getFields() {
        const xml = this.getXML();
        if (xml === undefined) {
            return [];
        }
        const parsed = xmljs.xml2js(xml, { compact: true });
        return this.parse(parsed);
    }
    parse(data) {
        const ret = [];
        const fields = data.abapGit["asx:abap"]["asx:values"].DD03P_TABLE;
        for (const field of xml_utils_1.xmlToArray(fields.DD03P)) {
            ret.push(field.FIELDNAME._text);
        }
        return ret;
    }
    getXML() {
        for (const file of this.getFiles()) {
            if (file.getFilename().match(/\.tabl\.xml$/i)) {
                return file.getRaw();
            }
        }
        return undefined;
    }
}
exports.Table = Table;
