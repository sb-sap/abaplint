"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Json {
    output(issues, _fileCount) {
        const out = [];
        for (const issue of issues) {
            const single = {
                description: issue.getMessage(),
                key: issue.getKey(),
                file: issue.getFile().getFilename(),
                start: {
                    row: issue.getStart().getRow(),
                    col: issue.getStart().getCol(),
                },
                end: {
                    row: issue.getEnd().getRow(),
                    col: issue.getEnd().getCol(),
                },
            };
            out.push(single);
        }
        return JSON.stringify(out) + "\n";
    }
}
exports.Json = Json;
