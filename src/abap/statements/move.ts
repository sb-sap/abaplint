import {Statement} from "./_statement";
import {verNot, str, ver, seq, alt, opt, plus, IRunnable} from "../combi";
import {Target, Source} from "../expressions";
import {Version} from "../../version";

export class Move extends Statement {

  public getMatcher(): IRunnable {
    let keeping = ver(Version.v740sp05, str("KEEPING TARGET LINES"));
    let expanding = ver(Version.v740sp05, str("EXPANDING NESTED TABLES"));

    let mov = verNot(Version.Cloud, str("MOVE"));

    let move = seq(alt(mov, str("MOVE-CORRESPONDING")),
                   opt(str("EXACT")),
                   new Source(),
                   alt(str("TO"), str("?TO")),
                   new Target(),
                   opt(expanding),
                   opt(keeping));

    let equals = alt(str("="), str("?="));

// todo, move "?=" to CAST?
    let eq = seq(plus(seq(new Target(), equals)), new Source());

    return alt(move, eq);
  }

}