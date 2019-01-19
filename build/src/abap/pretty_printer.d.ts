import { ABAPFile } from "../files";
export declare class PrettyPrinter {
    private result;
    private file;
    constructor(file: ABAPFile);
    run(): string;
    getExpectedIndentation(): number[];
    private indentCode;
    private replaceString;
    private upperCaseKeywords;
}
