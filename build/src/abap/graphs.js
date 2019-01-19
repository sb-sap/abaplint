"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Combi = require("./combi");
const fs = require("fs");
const artifacts_1 = require("./artifacts");
// todo, move this method to somewhere under web/syntax?
function sort(data) {
    const unique = data.filter((v, i, a) => { return a.indexOf(v) === i; });
    return unique.sort();
}
function compareString(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}
class Graph {
    static run() {
        this.writeFile(this.buildData());
    }
    static buildData() {
        const res = { expressions: [], statements: [], structures: [] };
        for (const expr of artifacts_1.Artifacts.getExpressions()) {
            res.expressions.push(this.buildRunnable(expr.constructor.name, "expression", expr.getRunnable(), true));
        }
        for (const stat of artifacts_1.Artifacts.getStatements()) {
            res.statements.push(this.buildRunnable(stat.constructor.name, "statement", stat.getMatcher(), false));
        }
        for (const stru of artifacts_1.Artifacts.getStructures()) {
            const str = "Railroad.Diagram.INTERNAL_ALIGNMENT = 'left';\n" +
                "Railroad.Diagram(" + stru.getMatcher().toRailroad() + ").toString();";
            const using = stru.getMatcher().getUsing();
            res.structures.push({
                name: stru.constructor.name,
                type: "structure",
                railroad: str,
                using: sort(using)
            });
        }
        res.expressions.sort(compareString);
        res.statements.sort(compareString);
        res.structures.sort(compareString);
        return res;
    }
    static buildRunnable(name, type, runnable, complex) {
        return {
            name: name,
            type: type,
            railroad: Combi.Combi.railroad(runnable, complex),
            using: sort(runnable.getUsing())
        };
    }
    static writeFile(data) {
        fs.writeFileSync("./syntax/generated.json", JSON.stringify(data, undefined, 2), "utf8");
    }
}
Graph.run();
