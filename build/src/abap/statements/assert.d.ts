import { Statement } from "./_statement";
import { IStatementRunnable } from "../combi";
export declare class Assert extends Statement {
    getMatcher(): IStatementRunnable;
}
