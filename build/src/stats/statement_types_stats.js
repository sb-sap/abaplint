"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StatementTypesStats {
    static run(reg) {
        const ret = [];
        for (const a of reg.getABAPFiles()) {
            for (const s of a.getStatements()) {
                let added = false;
                // todo, this is slow
                for (const r of ret) {
                    if (r.type === s.get().constructor.name) {
                        r.count++;
                        added = true;
                        break;
                    }
                }
                if (added === false) {
                    ret.push({ type: s.get().constructor.name, count: 1 });
                }
            }
        }
        return ret;
    }
}
exports.StatementTypesStats = StatementTypesStats;
