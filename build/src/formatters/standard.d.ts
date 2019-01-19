import { Issue } from "../issue";
import { IFormatter } from "./_iformatter";
export declare class Standard implements IFormatter {
    output(issues: Issue[], fileCount: number): string;
    private columns;
    private pad;
    private build_tuple;
}
