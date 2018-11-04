import {Statement} from "./_statement";
import {str, seq, alt, plus, IRunnable} from "../combi";
import {Target, Source} from "../expressions";

export class Split extends Statement {

  public getMatcher(): IRunnable {
    let into = alt(seq(str("TABLE"), new Target()), plus(new Target()));

    let ret = seq(str("SPLIT"),
                  new Source(),
                  str("AT"),
                  new Source(),
                  str("INTO"),
                  into);
    return ret;
  }

}