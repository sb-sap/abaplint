import {statementType} from "../_utils";
import * as Statements from "../../../src/abap/statements/";

const tests = [
  "NEW-LINE.",
  "NEW-LINE SCROLLING.",
  "NEW-LINE NO-SCROLLING.",
];

statementType(tests, "NEW-LINE", Statements.NewLine);