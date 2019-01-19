"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Statement {
}
exports.Statement = Statement;
class Unknown extends Statement {
    getMatcher() {
        throw new Error("Unknown Statement, get_matcher");
    }
}
exports.Unknown = Unknown;
class Comment extends Statement {
    getMatcher() {
        throw new Error("Comment Statement, get_matcher");
    }
}
exports.Comment = Comment;
class Empty extends Statement {
    getMatcher() {
        throw new Error("Empty Statement, get_matcher");
    }
}
exports.Empty = Empty;
class MacroCall extends Statement {
    getMatcher() {
        throw new Error("MacroCall Statement, get_matcher");
    }
}
exports.MacroCall = MacroCall;
class MacroContent extends Statement {
    getMatcher() {
        throw new Error("MacroContent Statement, get_matcher");
    }
}
exports.MacroContent = MacroContent;
class NativeSQL extends Statement {
    getMatcher() {
        throw new Error("NativeSQL Statement, get_matcher");
    }
}
exports.NativeSQL = NativeSQL;
