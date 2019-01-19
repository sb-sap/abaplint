import { Issue } from "../issue";
import { IFormatter } from "./_iformatter";
export declare class CodeClimate implements IFormatter {
    output(issues: Issue[], fileCount: number): string;
}
