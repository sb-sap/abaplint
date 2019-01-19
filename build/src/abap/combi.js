"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tokens = require("./tokens");
const nodes_1 = require("./nodes/");
const version_1 = require("../version");
class Result {
    constructor(a, n) {
        // tokens: not yet matched
        // nodes: matched tokens
        this.tokens = a;
        this.nodes = n;
        if (this.nodes === undefined) {
            this.nodes = [];
        }
    }
    peek() {
        return this.tokens[0];
    }
    // todo, make it non optional
    shift(node) {
        const copy = this.tokens.slice();
        copy.shift();
        if (this.nodes) {
            const cp = this.nodes.slice();
            if (node) {
                cp.push(node);
            }
            return new Result(copy, cp);
        }
        else {
            throw new Error("shift, error");
        }
    }
    getTokens() {
        return this.tokens;
    }
    popNode() {
        if (!this.nodes) {
            throw new Error("popNode, error");
        }
        return this.nodes.pop();
    }
    getNodes() {
        if (!this.nodes) {
            throw new Error("getNodes, error");
        }
        return this.nodes;
    }
    setNodes(n) {
        this.nodes = n;
    }
    length() {
        return this.tokens.length;
    }
    toStr() {
        let ret = "";
        for (const token of this.tokens) {
            ret = ret + " " + token.getStr();
        }
        return ret;
    }
}
exports.Result = Result;
class Regex {
    constructor(r) {
        this.regexp = r;
    }
    listKeywords() {
        return [];
    }
    getUsing() {
        return [];
    }
    run(r) {
        const result = [];
        for (const input of r) {
            if (input.length() !== 0
                && this.regexp.test(input.peek().getStr()) === true) {
                result.push(input.shift(new nodes_1.TokenNodeRegex(input.peek())));
            }
        }
        return result;
    }
    railroad() {
        return "Railroad.Terminal(\"" + this.regexp.source.replace(/\\/g, "\\\\") + "\")";
    }
    toStr() {
        return this.regexp.toString();
    }
    first() {
        return "";
    }
}
class Word {
    constructor(s) {
        this.s = s;
    }
    listKeywords() {
        return [this.s];
    }
    getUsing() {
        return [];
    }
    run(r) {
        const result = [];
        for (const input of r) {
            if (input.length() !== 0
                && input.peek().getStr().toUpperCase() === this.s.toUpperCase()) {
                //        console.log("match, " + this.s + result.length);
                result.push(input.shift(new nodes_1.TokenNode(input.peek())));
            }
        }
        return result;
    }
    railroad() {
        return "Railroad.Terminal('\"" + this.s + "\"')";
    }
    toStr() {
        return "\"" + this.s + "\"";
    }
    first() {
        return this.s;
    }
}
function className(cla) {
    // @ts-ignore
    return (cla.constructor + "").match(/\w+/g)[1];
}
function functionName(fun) {
    // @ts-ignore
    return (fun + "").match(/\w+/g)[1];
}
class Token {
    constructor(s) {
        this.s = s;
    }
    listKeywords() {
        return [];
    }
    getUsing() {
        return [];
    }
    run(r) {
        const result = [];
        for (const input of r) {
            if (input.length() !== 0
                && className(input.peek()).toUpperCase() === this.s.toUpperCase()) {
                result.push(input.shift(new nodes_1.TokenNode(input.peek())));
            }
        }
        return result;
    }
    railroad() {
        let text = this.s;
        for (const token in Tokens) {
            const toke = Tokens;
            if (token === this.s && toke[token].railroad) {
                text = toke[token].railroad();
                break;
            }
        }
        return "Railroad.Terminal('!\"" + text + "\"')";
    }
    toStr() {
        return "Token \"" + this.s + "\"";
    }
    first() {
        return "";
    }
}
class Vers {
    constructor(version, runnable) {
        this.version = version;
        this.runnable = runnable;
    }
    listKeywords() {
        return this.runnable.listKeywords();
    }
    run(r) {
        if (Combi.getVersion() >= this.version) {
            return this.runnable.run(r);
        }
        else {
            return [];
        }
    }
    getUsing() {
        return this.runnable.getUsing();
    }
    railroad() {
        return "Railroad.Sequence(Railroad.Comment(\"" +
            version_1.versionToText(this.version) +
            "\", {}), " +
            this.runnable.railroad() +
            ")";
    }
    toStr() {
        return "Version(" + this.runnable.toStr() + ")";
    }
    first() {
        return "";
    }
}
class VersNot {
    constructor(version, runnable) {
        this.version = version;
        this.runnable = runnable;
    }
    listKeywords() {
        return this.runnable.listKeywords();
    }
    getUsing() {
        return this.runnable.getUsing();
    }
    run(r) {
        if (Combi.getVersion() !== this.version) {
            return this.runnable.run(r);
        }
        else {
            return [];
        }
    }
    railroad() {
        return "Railroad.Sequence(Railroad.Comment(\"not " +
            version_1.versionToText(this.version) +
            "\", {}), " +
            this.runnable.railroad() +
            ")";
    }
    toStr() {
        return "VersionNot(" + this.runnable.toStr() + ")";
    }
    first() {
        return "";
    }
}
class OptionalPriority {
    constructor(optional) {
        this.optional = optional;
    }
    listKeywords() {
        return this.optional.listKeywords();
    }
    getUsing() {
        return this.optional.getUsing();
    }
    run(r) {
        let result = [];
        for (const input of r) {
            const res = this.optional.run([input]);
            if (res.length > 1) {
                result.push(input);
                result = result.concat(res);
                //      } else if (res.length === 1) {
                //        result = result.concat(res);
            }
            else if (res.length === 0) {
                result.push(input);
            }
            else if (res[0].length() < input.length()) {
                result = result.concat(res);
            }
            else {
                result.push(input);
            }
            /*
                  console.dir(res);
                  console.dir(result);
            */
        }
        return result;
    }
    railroad() {
        return "Railroad.Optional(" + this.optional.railroad() + ")";
    }
    toStr() {
        return "opt(" + this.optional.toStr() + ")";
    }
    first() {
        return "";
    }
}
class Optional {
    constructor(optional) {
        this.optional = optional;
    }
    listKeywords() {
        return this.optional.listKeywords();
    }
    getUsing() {
        return this.optional.getUsing();
    }
    run(r) {
        let result = [];
        for (const input of r) {
            result.push(input);
            const res = this.optional.run([input]);
            result = result.concat(res);
        }
        return result;
    }
    railroad() {
        return "Railroad.Optional(" + this.optional.railroad() + ")";
    }
    toStr() {
        return "opt(" + this.optional.toStr() + ")";
    }
    first() {
        return "";
    }
}
class Star {
    constructor(sta) {
        this.sta = sta;
    }
    listKeywords() {
        return this.sta.listKeywords();
    }
    getUsing() {
        return this.sta.getUsing();
    }
    run(r) {
        let result = r;
        let res = r;
        let input = [];
        for (;;) {
            input = res;
            res = this.sta.run(input);
            if (res.length === 0) {
                break;
            }
            result = result.concat(res);
        }
        //    console.dir(result);
        return result;
    }
    railroad() {
        return "Railroad.ZeroOrMore(" + this.sta.railroad() + ")";
    }
    toStr() {
        return "star(" + this.sta.toStr() + ")";
    }
    first() {
        return "";
    }
}
class Plus {
    constructor(plu) {
        this.plu = plu;
    }
    listKeywords() {
        return this.plu.listKeywords();
    }
    getUsing() {
        return this.plu.getUsing();
    }
    run(r) {
        return new Sequence([this.plu, new Star(this.plu)]).run(r);
    }
    railroad() {
        return "Railroad.OneOrMore(" + this.plu.railroad() + ")";
    }
    toStr() {
        return "plus(" + this.plu.toStr() + ")";
    }
    first() {
        return this.plu.first();
    }
}
class Sequence {
    constructor(list, stack = false) {
        if (list.length < 2) {
            throw new Error("Sequence, length error");
        }
        this.list = list;
        this.stack = stack;
    }
    listKeywords() {
        let ret = [];
        for (const i of this.list) {
            ret = ret.concat(i.listKeywords());
        }
        return ret;
    }
    getUsing() {
        return this.list.reduce((a, c) => { return a.concat(c.getUsing()); }, []);
    }
    run(r) {
        let result = [];
        for (const input of r) {
            let temp = [input];
            for (const sequence of this.list) {
                temp = sequence.run(temp);
                if (temp.length === 0) {
                    break;
                }
            }
            result = result.concat(temp);
        }
        return result;
    }
    railroad() {
        const children = this.list.map((e) => { return e.railroad(); });
        if (this.stack === true) {
            return "Railroad.Stack(" + children.join() + ")";
        }
        else {
            return "Railroad.Sequence(" + children.join() + ")";
        }
    }
    toStr() {
        let ret = "";
        for (const i of this.list) {
            ret = ret + i.toStr() + ",";
        }
        return "seq(" + ret + ")";
    }
    first() {
        return this.list[0].first();
    }
}
class WordSequence {
    constructor(stri) {
        this.words = [];
        this.stri = stri;
        const foo = this.stri.replace(/-/g, " - ");
        const split = foo.split(/[ ]/);
        for (const st of split) {
            // todo, use Dash token
            this.words.push(new Word(st));
        }
    }
    listKeywords() {
        // todo, will this work?
        return [this.stri.toString()];
    }
    getUsing() {
        return [];
    }
    run(r) {
        return (new Sequence(this.words)).run(r);
    }
    railroad() {
        return "Railroad.Terminal('\"" + this.stri + "\"')";
    }
    toStr() {
        return "str(" + this.stri + ")";
    }
    first() {
        return this.words[0].first();
    }
}
class Expression {
    run(r) {
        let results = [];
        for (const input of r) {
            const temp = this.getRunnable().run([input]);
            const moo = [];
            for (const t of temp) {
                let consumed = input.length() - t.length();
                if (consumed > 0) {
                    const length = t.getNodes().length;
                    const re = new nodes_1.ExpressionNode(this);
                    const children = [];
                    while (consumed > 0) {
                        const sub = t.popNode();
                        if (sub) {
                            children.push(sub);
                            consumed = consumed - sub.countTokens();
                        }
                    }
                    re.setChildren(children.reverse());
                    t.setNodes(t.getNodes().slice(0, length - consumed).concat([re]));
                }
                moo.push(t);
            }
            results = results.concat(moo);
        }
        //    console.dir(results);
        return results;
    }
    listKeywords() {
        // do not recurse, all Expressions are evaluated only on first level
        return [];
    }
    getUsing() {
        return ["expression/" + this.getName()];
    }
    getName() {
        return className(this);
    }
    railroad() {
        return "Railroad.NonTerminal('" + this.getName() + "', {href: '#/expression/" + this.getName() + "'})";
    }
    toStr() {
        return "expression(" + this.getName() + ")";
    }
    first() {
        return "";
    }
}
exports.Expression = Expression;
class Permutation {
    constructor(list) {
        if (list.length < 2) {
            throw new Error("Permutation, length error");
        }
        this.list = list;
    }
    listKeywords() {
        let ret = [];
        for (const i of this.list) {
            ret = ret.concat(i.listKeywords());
        }
        return ret;
    }
    getUsing() {
        return this.list.reduce((a, c) => { return a.concat(c.getUsing()); }, []);
    }
    run(r) {
        let result = [];
        for (let index = 0; index < this.list.length; index++) {
            const temp = this.list[index].run(r);
            if (temp.length !== 0) {
                // match
                result = result.concat(temp);
                const left = this.list;
                left.splice(index, 1);
                if (left.length === 1) {
                    result = result.concat(left[0].run(temp));
                }
                else {
                    result = result.concat(new Permutation(left).run(temp));
                }
            }
        }
        return result;
    }
    railroad() {
        const children = this.list.map((e) => { return e.railroad(); });
        return "Railroad.MultipleChoice(0, 'any'," + children.join() + ")";
    }
    toStr() {
        const children = this.list.map((e) => { return e.toStr(); });
        return "per(" + children.join() + ")";
    }
    first() {
        return "";
    }
}
class Alternative {
    constructor(list) {
        if (list.length < 2) {
            throw new Error("Alternative, length error");
        }
        this.list = list;
    }
    listKeywords() {
        let ret = [];
        for (const i of this.list) {
            ret = ret.concat(i.listKeywords());
        }
        return ret;
    }
    getUsing() {
        return this.list.reduce((a, c) => { return a.concat(c.getUsing()); }, []);
    }
    run(r) {
        let result = [];
        for (const sequ of this.list) {
            const temp = sequ.run(r);
            result = result.concat(temp);
        }
        return result;
    }
    railroad() {
        const children = this.list.map((e) => { return e.railroad(); });
        return "Railroad.Choice(0, " + children.join() + ")";
    }
    toStr() {
        let ret = "";
        for (const i of this.list) {
            ret = ret + i.toStr() + ",";
        }
        return "alt(" + ret + ")";
    }
    first() {
        return "";
    }
}
// prioritized alternative, skip others if match found
class AlternativePriority {
    constructor(list) {
        if (list.length < 2) {
            throw new Error("Alternative, length error");
        }
        this.list = list;
    }
    listKeywords() {
        let ret = [];
        for (const i of this.list) {
            ret = ret.concat(i.listKeywords());
        }
        return ret;
    }
    getUsing() {
        return this.list.reduce((a, c) => { return a.concat(c.getUsing()); }, []);
    }
    run(r) {
        let result = [];
        for (const sequ of this.list) {
            //      console.log(seq.toStr());
            const temp = sequ.run(r);
            result = result.concat(temp);
            if (temp.length > 0) {
                break;
            }
        }
        return result;
    }
    railroad() {
        const children = this.list.map((e) => { return e.railroad(); });
        return "Railroad.Choice(0, " + children.join() + ")";
    }
    toStr() {
        let ret = "";
        for (const i of this.list) {
            ret = ret + i.toStr() + ",";
        }
        return "alt(" + ret + ")";
    }
    first() {
        return "";
    }
}
class Combi {
    static railroad(runnable, complex = false) {
        // todo, move method to graph.js?
        let type = "Railroad.Diagram(";
        if (complex === true) {
            type = "Railroad.ComplexDiagram(";
        }
        const result = "Railroad.Diagram.INTERNAL_ALIGNMENT = 'left';\n" +
            type +
            runnable.railroad() +
            ").toString();";
        return result;
    }
    static listKeywords(runnable) {
        // todo, move these walkers of the syntax tree to some abstraction?
        let res = runnable.listKeywords();
        // remove duplicates
        res = res.filter((x, i, a) => { return a.indexOf(x) === i; });
        return res;
    }
    // assumption: no pgragmas supplied in tokens input
    static run(runnable, tokens, version) {
        this.ver = version;
        const input = new Result(tokens);
        const result = runnable.run([input]);
        //    console.log("res: " + result.length);
        for (const res of result) {
            if (res.length() === 0) {
                return res.getNodes();
            }
        }
        return undefined;
    }
    static getVersion() {
        return this.ver;
    }
}
exports.Combi = Combi;
// -----------------------------------------------------------------------------
function str(s) {
    if (/[ -]/.test(s) === false) {
        return new Word(s);
    }
    else {
        return new WordSequence(s);
    }
}
exports.str = str;
function seq(first, ...rest) {
    return new Sequence([first].concat(rest));
}
exports.seq = seq;
function seqs(first, ...rest) {
    return new Sequence([first].concat(rest), true);
}
exports.seqs = seqs;
function alt(first, ...rest) {
    return new Alternative([first].concat(rest));
}
exports.alt = alt;
function altPrio(first, ...rest) {
    return new AlternativePriority([first].concat(rest));
}
exports.altPrio = altPrio;
function per(first, ...rest) {
    return new Permutation([first].concat(rest));
}
exports.per = per;
function opt(first) {
    return new Optional(first);
}
exports.opt = opt;
function optPrio(first) {
    return new OptionalPriority(first);
}
exports.optPrio = optPrio;
function tok(t) {
    return new Token(functionName(t));
}
exports.tok = tok;
function star(first) {
    return new Star(first);
}
exports.star = star;
function regex(r) {
    return new Regex(r);
}
exports.regex = regex;
function plus(first) {
    return new Plus(first);
}
exports.plus = plus;
function ver(version, first) {
    return new Vers(version, first);
}
exports.ver = ver;
function verNot(version, first) {
    return new VersNot(version, first);
}
exports.verNot = verNot;
