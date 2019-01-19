"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tokens = require("./tokens");
const Statements = require("./statements");
const combi_1 = require("./combi");
const nodes_1 = require("./nodes/");
const _statement_1 = require("./statements/_statement");
const artifacts_1 = require("./artifacts");
class Map {
    constructor() {
        this.map = {};
        for (const stat of artifacts_1.Artifacts.getStatements()) {
            const first = stat.getMatcher().first();
            if (this.map[first]) {
                this.map[first].push(stat);
            }
            else {
                this.map[first] = [stat];
            }
        }
    }
    lookup(token) {
        let res = this.map[token.getStr().toUpperCase()];
        res = res ? res.concat(this.map[""]) : this.map[""];
        return res;
    }
}
class StatementParser {
    static run(tokens, ver) {
        this.statements = [];
        if (!this.map) {
            this.map = new Map();
        }
        this.process(tokens);
        this.categorize(ver);
        this.macros();
        this.nativeSQL();
        return this.statements;
    }
    static tokensToNodes(tokens) {
        const ret = [];
        tokens.forEach((t) => { ret.push(new nodes_1.TokenNode(t)); });
        return ret;
    }
    static macros() {
        const result = [];
        let define = false;
        for (let statement of this.statements) {
            if (statement.get() instanceof Statements.Define) {
                define = true;
            }
            else if (statement.get() instanceof Statements.EndOfDefinition) {
                define = false;
            }
            else if (!(statement.get() instanceof _statement_1.Comment) && define === true) {
                statement = new nodes_1.StatementNode(new _statement_1.MacroContent()).setChildren(this.tokensToNodes(statement.getTokens()));
            }
            result.push(statement);
        }
        this.statements = result;
    }
    static nativeSQL() {
        const result = [];
        let sql = false;
        for (let statement of this.statements) {
            if (statement.get() instanceof Statements.ExecSQL) {
                sql = true;
            }
            else if (statement.get() instanceof Statements.EndExec) {
                sql = false;
            }
            else if (!(statement.get() instanceof _statement_1.Comment) && sql === true) {
                statement = new nodes_1.StatementNode(new _statement_1.NativeSQL()).setChildren(this.tokensToNodes(statement.getTokens()));
            }
            result.push(statement);
        }
        this.statements = result;
    }
    static removeLast(tokens) {
        const copy = tokens.slice();
        copy.pop();
        return copy;
    }
    // for each statement, run statement matchers to figure out which kind of statement it is
    static categorize(ver) {
        const result = [];
        for (let statement of this.statements) {
            const length = statement.getTokens().length;
            const last = statement.getTokens()[length - 1];
            if (length === 1
                && last instanceof Tokens.Punctuation) {
                statement = new nodes_1.StatementNode(new _statement_1.Empty()).setChildren(this.tokensToNodes(statement.getTokens()));
            }
            else if (statement.get() instanceof _statement_1.Unknown
                && last instanceof Tokens.Punctuation) {
                statement = this.match(statement, ver);
            }
            result.push(statement);
        }
        this.statements = result;
    }
    static removePragma(tokens) {
        return tokens.filter(function (value) { return !(value instanceof Tokens.Pragma); });
    }
    static match(statement, ver) {
        let tokens = statement.getTokens();
        const last = tokens[tokens.length - 1];
        tokens = this.removePragma(this.removeLast(tokens));
        if (tokens.length === 0) {
            return new nodes_1.StatementNode(new _statement_1.Empty()).setChildren(this.tokensToNodes(this.removePragma(statement.getTokens())));
        }
        for (const st of this.map.lookup(tokens[0])) {
            const match = combi_1.Combi.run(st.getMatcher(), tokens, ver);
            if (match) {
                return new nodes_1.StatementNode(st).setChildren(match.concat(new nodes_1.TokenNode(last)));
            }
        }
        return statement;
    }
    // takes care of splitting tokens into statements, also handles chained statements
    static process(tokens) {
        let add = [];
        let pre = [];
        const ukn = (t) => { this.statements.push(new nodes_1.StatementNode(new _statement_1.Unknown()).setChildren(this.tokensToNodes(t))); };
        for (const token of tokens) {
            if (token instanceof Tokens.Comment) {
                this.statements.push(new nodes_1.StatementNode(new _statement_1.Comment()).setChildren(this.tokensToNodes([token])));
                continue;
            }
            add.push(token);
            if (token.getStr() === ".") {
                ukn(pre.concat(add));
                add = [];
                pre = [];
            }
            else if (token.getStr() === "," && pre.length > 0) {
                ukn(pre.concat(add));
                add = [];
            }
            else if (token.getStr() === ":") {
                add.pop(); // do not add colon token to statement
                pre = add.slice(0);
                add = [];
            }
        }
        if (add.length > 0) {
            ukn(pre.concat(add));
        }
    }
}
exports.StatementParser = StatementParser;
