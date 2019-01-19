"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _abap_object_1 = require("./_abap_object");
const xmljs = require("xml-js");
var ClassCategory;
(function (ClassCategory) {
    ClassCategory["Test"] = "05";
    ClassCategory["Persistent"] = "10";
    ClassCategory["PersistentFactory"] = "11";
    ClassCategory["Exception"] = "40";
    ClassCategory["SharedObject"] = "45";
})(ClassCategory = exports.ClassCategory || (exports.ClassCategory = {}));
class Class extends _abap_object_1.ABAPObject {
    // todo, add dirty flag so things can be cached?
    getType() {
        return "CLAS";
    }
    // todo, rename to "getDefinition" ?
    getClassDefinition() {
        const main = this.getMainABAP();
        if (!main) {
            return undefined;
        }
        const definitions = main.getClassDefinitions();
        if (definitions.length === 0) {
            return undefined;
        }
        return definitions[0];
    }
    /*
    public getLocalClasses(): ClassDefinition[] {
      const ret: ClassDefinition[] = [];
      for (const file of this.getParsedFiles()) {
        const stru = file.getStructure();
        if (stru) {
          const nodes = stru.findAllStructures(Structures.ClassDefinition);
          for (const node of nodes) {
            ret.push(new ClassDefinition(node));
          }
        }
      }
      return ret;
    }
   */
    // -------------------
    getDescription() {
        const xml = this.getXML();
        if (!xml) {
            return "";
        }
        const parsed = xmljs.xml2js(xml, { compact: true });
        const vseo = parsed.abapGit["asx:abap"]["asx:values"].VSEOCLASS;
        return vseo.DESCRIPT ? vseo.DESCRIPT._text : "";
    }
    getCategory() {
        const xml = this.getXML();
        if (!xml) {
            return undefined;
        }
        const result = xml.match(/<CATEGORY>(\d{2})<\/CATEGORY>/);
        if (result) {
            // https://blog.mariusschulz.com/2017/10/27/typescript-2-4-string-enums#no-reverse-mapping-for-string-valued-enum-members
            return result[1];
        }
        else {
            return undefined;
        }
    }
    // --------------------
    getMainABAP() {
        // todo, overrride addFile instead of looping through it again?
        const files = this.getABAPFiles();
        for (const file of files) {
            if (file.getFilename().match(/\.clas\.abap$/i)) {
                return file;
            }
        }
        if (files.length === 0) {
            throw new Error("class.ts, getMain: Could not find main file, parsed empty");
        }
        else {
            throw new Error("class.ts, getMain: Could not find main file");
        }
    }
    getXML() {
        for (const file of this.getFiles()) {
            if (file.getFilename().match(/\.clas\.xml$/i)) {
                return file.getRaw();
            }
        }
        return undefined;
    }
}
exports.Class = Class;
