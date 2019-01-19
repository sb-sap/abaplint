"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const registry_1 = require("../../src/registry");
const memory_file_1 = require("../../src/files/memory_file");
describe("Funcion Group, parse main xml", () => {
    it("test", () => {
        const xml = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
            "<abapGit version=\"v1.0.0\" serializer=\"LCL_OBJECT_FUGR\" serializer_version=\"v1.0.0\">\n" +
            " <asx:abap xmlns:asx=\"http://www.sap.com/abapxml\" version=\"1.0\">\n" +
            "  <asx:values>\n" +
            "   <AREAT>test</AREAT>\n" +
            "   <INCLUDES>\n" +
            "    <SOBJ_NAME>LZAGTEST_FUNCTION_GROUPTOP</SOBJ_NAME>\n" +
            "    <SOBJ_NAME>SAPLZAGTEST_FUNCTION_GROUP</SOBJ_NAME>\n" +
            "   </INCLUDES>\n" +
            "   <FUNCTIONS>\n" +
            "    <item>\n" +
            "     <FUNCNAME>ZAGTEST_FUNCTION_MODULE</FUNCNAME>\n" +
            "     <SHORT_TEXT>test</SHORT_TEXT>\n" +
            "     <IMPORT>\n" +
            "      <RSIMP>\n" +
            "       <PARAMETER>IMPORT_PARAMETER</PARAMETER>\n" +
            "       <REFERENCE>X</REFERENCE>\n" +
            "       <TYP>C</TYP>\n" +
            "      </RSIMP>\n" +
            "     </IMPORT>\n" +
            "     <DOCUMENTATION>\n" +
            "      <RSFDO>\n" +
            "       <PARAMETER>IMPORT_PARAMETER</PARAMETER>\n" +
            "       <KIND>P</KIND>\n" +
            "       <INDEX> 001</INDEX>\n" +
            "      </RSFDO>\n" +
            "     </DOCUMENTATION>\n" +
            "    </item>\n" +
            "   </FUNCTIONS>\n" +
            "  </asx:values>\n" +
            " </asx:abap>\n" +
            "</abapGit>";
        const reg = new registry_1.Registry().addFile(new memory_file_1.MemoryFile("zagtest_function_group.fugr.xml", xml)).parse();
        const fugr = reg.getABAPObjects()[0];
        const modules = fugr.getModules();
        chai_1.expect(modules.length).to.equal(1);
        chai_1.expect(modules[0].getName()).to.equal("ZAGTEST_FUNCTION_MODULE");
        chai_1.expect(modules[0].getParameters().length).to.equal(1);
    });
});
