"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const total_1 = require("./total");
class Tuple {
    constructor(filename, description) {
        this.filename = filename;
        this.description = description;
    }
}
class Standard {
    output(issues, fileCount) {
        const tuples = [];
        for (const issue of issues) {
            tuples.push(this.build_tuple(issue));
        }
        const result = this.columns(tuples);
        return result + new total_1.Total().output(issues, fileCount);
    }
    columns(tuples) {
        let max = 0;
        tuples.forEach((tuple) => { if (max < tuple.filename.length) {
            max = tuple.filename.length;
        } });
        let result = "";
        tuples.forEach((tuple) => {
            result = result +
                this.pad(tuple.filename, max - tuple.filename.length) +
                tuple.description + "\n";
        });
        return result;
    }
    pad(input, length) {
        let output = input;
        for (let i = 0; i < length; i++) {
            output = output + " ";
        }
        return output + " - ";
    }
    build_tuple(issue) {
        return new Tuple(issue.getFile().getFilename() +
            "[" + issue.getStart().getRow() + ", " + issue.getStart().getCol() + "]", issue.getMessage());
    }
}
exports.Standard = Standard;
