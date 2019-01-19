"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _abstract_object_1 = require("./_abstract_object");
const xmljs = require("xml-js");
const xml_utils_1 = require("../xml_utils");
class View extends _abstract_object_1.AbstractObject {
    getType() {
        return "VIEW";
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
        const fields = data.abapGit["asx:abap"]["asx:values"].DD27P_TABLE;
        for (const field of xml_utils_1.xmlToArray(fields.DD27P)) {
            ret.push(field.VIEWFIELD._text);
        }
        return ret;
    }
    getXML() {
        for (const file of this.getFiles()) {
            if (file.getFilename().match(/\.view\.xml$/i)) {
                return file.getRaw();
            }
        }
        return undefined;
    }
}
exports.View = View;
