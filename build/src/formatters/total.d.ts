import { Issue } from "../issue";
import { IFormatter } from "./_iformatter";
export declare class Total implements IFormatter {
    output(issues: Issue[], fileCount: number): string;
}
