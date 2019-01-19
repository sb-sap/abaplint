"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _utils_1 = require("./_utils");
// todo, rename and move somewhere under /test/abap/
const tests = [
    { abap: "add 2 to lv_foo.", cnt: 5 },
    { abap: "CONCATENATE lv_tmp iv_pack INTO lv_xstring IN BYTE MODE.", cnt: 9 },
    { abap: "EXPORT list = it_list TO DATA BUFFER lv_xstring.", cnt: 7 },
    { abap: "EXPORT list = it_list moo = boo TO DATA BUFFER lv_xstring.", cnt: 7 },
];
describe("ast count root children, statement", () => {
    tests.forEach((test) => {
        const slist = _utils_1.getStatements(test.abap);
        it("\"" + test.abap + "\" should have " + test.cnt, () => {
            chai_1.expect(slist[0].getChildren().length).to.equals(test.cnt);
        });
    });
});
