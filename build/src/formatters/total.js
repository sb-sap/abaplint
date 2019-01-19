"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Total {
    output(issues, fileCount) {
        return "abaplint: " + issues.length + " issue(s) found, " + fileCount + " file(s) analyzed\n";
    }
}
exports.Total = Total;
