import { Issue } from "../issue";
import { IFormatter } from "./_iformatter";
export declare class Junit implements IFormatter {
    output(issues: Issue[], _fileCount: number): string;
}
