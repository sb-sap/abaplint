"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const total_1 = require("./total");
// for CodeClimate output?
class CodeClimate {
    output(issues, fileCount) {
        let result = "";
        for (const issue of issues) {
            let code = issue.getFile().getRawRows()[issue.getStart().getRow() - 1];
            if (code) {
                code = code.trim();
            }
            const text = issue.getFile().getFilename() +
                "[" + issue.getStart().getRow() + ", " +
                issue.getStart().getCol() + "] - " +
                issue.getMessage() + " - " +
                code + "\n";
            result = result + text;
        }
        return result + new total_1.Total().output(issues, fileCount);
    }
}
exports.CodeClimate = CodeClimate;
