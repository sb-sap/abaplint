import { IStatementRunnable } from "../combi";
export declare abstract class Statement {
    abstract getMatcher(): IStatementRunnable;
}
export declare class Unknown extends Statement {
    getMatcher(): IStatementRunnable;
}
export declare class Comment extends Statement {
    getMatcher(): IStatementRunnable;
}
export declare class Empty extends Statement {
    getMatcher(): IStatementRunnable;
}
export declare class MacroCall extends Statement {
    getMatcher(): IStatementRunnable;
}
export declare class MacroContent extends Statement {
    getMatcher(): IStatementRunnable;
}
export declare class NativeSQL extends Statement {
    getMatcher(): IStatementRunnable;
}
