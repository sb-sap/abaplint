"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodes_1 = require("../nodes/");
class Sequence {
    constructor(list) {
        if (list.length < 2) {
            throw new Error("Sequence, length error");
        }
        this.list = list;
    }
    toRailroad() {
        const children = this.list.map((e) => { return e.toRailroad(); });
        return "Railroad.Sequence(" + children.join() + ")";
    }
    getUsing() {
        return this.list.reduce((a, c) => { return a.concat(c.getUsing()); }, []);
    }
    run(statements, parent) {
        let inn = statements;
        let out = [];
        for (const i of this.list) {
            const match = i.run(inn, parent);
            if (match.error) {
                return {
                    matched: [],
                    unmatched: statements,
                    error: true,
                    errorDescription: match.errorDescription,
                    errorMatched: out.length,
                };
            }
            out = out.concat(match.matched);
            inn = match.unmatched;
        }
        return {
            matched: out,
            unmatched: inn,
            error: false,
            errorDescription: "",
            errorMatched: 0,
        };
    }
}
class Alternative {
    constructor(list) {
        if (list.length < 2) {
            throw new Error("Alternative, length error");
        }
        this.list = list;
    }
    toRailroad() {
        const children = this.list.map((e) => { return e.toRailroad(); });
        return "Railroad.Choice(0, " + children.join() + ")";
    }
    getUsing() {
        return this.list.reduce((a, c) => { return a.concat(c.getUsing()); }, []);
    }
    run(statements, parent) {
        let count = 0;
        let countError = "";
        for (const i of this.list) {
            const match = i.run(statements, parent);
            if (match.error === false) {
                return match;
            }
            if (match.errorMatched > count) {
                countError = match.errorDescription;
                count = match.errorMatched;
            }
        }
        const children = this.list.map((e) => { return e.constructor.name.toUpperCase(); });
        if (count === 0) {
            return {
                matched: [],
                unmatched: statements,
                error: true,
                errorDescription: "Expected " + children.join(" or "),
                errorMatched: count,
            };
        }
        else {
            return {
                matched: [],
                unmatched: statements,
                error: true,
                errorDescription: countError,
                errorMatched: count,
            };
        }
    }
}
class Optional {
    constructor(obj) {
        this.obj = obj;
    }
    toRailroad() {
        return "Railroad.Optional(" + this.obj.toRailroad() + ")";
    }
    getUsing() {
        return this.obj.getUsing();
    }
    run(statements, parent) {
        const ret = this.obj.run(statements, parent);
        ret.error = false;
        return ret;
    }
}
class Star {
    constructor(obj) {
        if (obj === undefined) {
            throw new Error("Star, input undefined");
        }
        this.obj = obj;
    }
    toRailroad() {
        return "Railroad.ZeroOrMore(" + this.obj.toRailroad() + ")";
    }
    getUsing() {
        return this.obj.getUsing();
    }
    run(statements, parent) {
        let inn = statements;
        let out = [];
        // tslint:disable-next-line:no-constant-condition
        while (true) {
            const match = this.obj.run(inn, parent);
            if (inn.length === 0) {
                return {
                    matched: out,
                    unmatched: inn,
                    error: false,
                    errorDescription: "",
                    errorMatched: 0,
                };
            }
            else if (match.error === true) {
                if (match.errorMatched > 0) {
                    return {
                        matched: out,
                        unmatched: inn,
                        error: true,
                        errorDescription: match.errorDescription,
                        errorMatched: match.errorMatched,
                    };
                }
                else {
                    return {
                        matched: out,
                        unmatched: inn,
                        error: false,
                        errorDescription: "",
                        errorMatched: 0,
                    };
                }
            }
            out = out.concat(match.matched);
            inn = match.unmatched;
        }
    }
}
class SubStructure {
    constructor(s) {
        this.s = s;
    }
    toRailroad() {
        return "Railroad.NonTerminal('" + this.s.constructor.name + "', {href: '#/structure/" + this.s.constructor.name + "'})";
    }
    getUsing() {
        return ["structure/" + this.s.constructor.name];
    }
    run(statements, parent) {
        const nparent = new nodes_1.StructureNode(this.s);
        const ret = this.s.getMatcher().run(statements, nparent);
        if (ret.matched.length === 0) {
            ret.error = true;
        }
        else {
            parent.addChild(nparent);
        }
        return ret;
    }
}
class SubStatement {
    constructor(obj) {
        this.obj = obj;
    }
    toRailroad() {
        return "Railroad.Terminal('" + this.className() + "', {href: '#/statement/" + this.className() + "'})";
    }
    getUsing() {
        return ["statement/" + this.className()];
    }
    className() {
        // @ts-ignore
        return (this.obj + "").match(/\w+/g)[1];
    }
    run(statements, parent) {
        if (statements.length === 0) {
            return {
                matched: [],
                unmatched: [],
                error: true,
                errorDescription: "Expected " + this.className().toUpperCase(),
                errorMatched: 0,
            };
        }
        else if (statements[0].get() instanceof this.obj) {
            parent.addChild(statements[0]);
            return {
                matched: [statements[0]],
                unmatched: statements.splice(1),
                error: false,
                errorDescription: "",
                errorMatched: 0,
            };
        }
        else {
            return {
                matched: [],
                unmatched: statements,
                error: true,
                errorDescription: "Expected " + this.className().toUpperCase(),
                errorMatched: 0,
            };
        }
    }
}
function seq(first, ...rest) {
    return new Sequence([first].concat(rest));
}
exports.seq = seq;
function alt(first, ...rest) {
    return new Alternative([first].concat(rest));
}
exports.alt = alt;
function beginEnd(begin, body, end) {
    return new Sequence([begin, body, end]);
}
exports.beginEnd = beginEnd;
function opt(o) {
    return new Optional(o);
}
exports.opt = opt;
function star(s) {
    return new Star(s);
}
exports.star = star;
function sta(s) {
    return new SubStatement(s);
}
exports.sta = sta;
function sub(s) {
    return new SubStructure(s);
}
exports.sub = sub;
