import {Statement} from "./_statement";
import {verNot, str, seq, per, IRunnable} from "../combi";
import {Target, Source} from "../expressions";
import {Version} from "../../version";

export class GenerateSubroutine extends Statement {

  public getMatcher(): IRunnable {
    let name = seq(str("NAME"), new Source());
    let message = seq(str("MESSAGE"), new Target());
    let messageid = seq(str("MESSAGE-ID"), new Target());
    let line = seq(str("LINE"), new Target());
    let word = seq(str("WORD"), new Target());
    let offset = seq(str("OFFSET"), new Target());
    let short = seq(str("SHORTDUMP-ID"), new Target());
    let include = seq(str("INCLUDE"), new Target());

    let ret = seq(str("GENERATE SUBROUTINE POOL"),
                  new Source(),
                  per(name, message, line, word, include, offset, messageid, short));

    return verNot(Version.Cloud, ret);
  }

}