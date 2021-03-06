import {Statement} from "./_statement";
import {verNot, str, seq, opt, per, IStatementRunnable} from "../combi";
import {Target, Source} from "../expressions";
import {Version} from "../../version";

export class GenerateReport extends Statement {

  public getMatcher(): IStatementRunnable {

    const without = str("WITHOUT SELECTION-SCREEN");
    const message = seq(str("MESSAGE"), new Target());
    const include = seq(str("INCLUDE"), new Target());
    const line = seq(str("LINE"), new Target());
    const word = seq(str("WORD"), new Target());
    const offset = seq(str("OFFSET"), new Target());
    const headers = str("WITH PRECOMPILED HEADERS");
    const test = str("WITH TEST CODE");

    const options = per(without, message, include, line, word, offset, headers, test);

    const ret = seq(str("GENERATE REPORT"),
                    new Source(),
                    opt(options));

    return verNot(Version.Cloud, ret);
  }

}