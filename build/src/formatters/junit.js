"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xml_js_1 = require("xml-js");
function escape(xml) {
    return xml.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}
class Junit {
    output(issues, _fileCount) {
        let outputObj = {
            _declaration: {
                _attributes: {
                    version: '1.0',
                    encoding: 'UTF-8'
                }
            },
            testsuites: {
                testsuite: {
                    _attributes: {
                        name: 'abaplint',
                        tests: issues.length || 1,
                        failures: issues.length,
                        errors: 0,
                        skipped: 0
                    },
                    testcase: []
                }
            }
        };
        if (issues.length > 0) {
            for (const issue of issues) {
                outputObj.testsuites.testsuite.testcase.push({
                    _attributes: {
                        classname: issue.getFile().getObjectName(),
                        file: issue.getFile().getFilename(),
                        //name: `[${issue.getStart().getRow()}, ${issue.getStart().getCol()}]: ${issue.getKey()}`
                        name: `${issue.getKey()}`
                    },
                    failure: {
                        _attributes: {
                            message: escape(issue.getKey()),
                        },
                        _cdata: `[${issue.getStart().getRow()}, ${issue.getStart().getCol()}, ${issue.getMessage()}`
                    }
                });
            }
        }
        else {
            outputObj.testsuites.testsuite.testcase.push({
                _attributes: {
                    classname: 'none',
                    name: 'OK'
                },
            });
        }
        let xml = xml_js_1.js2xml(outputObj, { compact: true, spaces: 2 });
        return xml;
    }
}
exports.Junit = Junit;
