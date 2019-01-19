"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Formatters = require(".");
class Formatter {
    static format(issues, format, fileCount) {
        // todo, this can be done more generic, move to artifacts.ts?
        switch (format) {
            case "total":
                return new Formatters.Total().output(issues, fileCount);
            case "json":
                return new Formatters.Json().output(issues, fileCount);
            case "junit":
                return new Formatters.Junit().output(issues, fileCount);
            case "codeclimate":
                return new Formatters.CodeClimate().output(issues, fileCount);
            default:
                return new Formatters.Standard().output(issues, fileCount);
        }
    }
}
exports.Formatter = Formatter;
