import {Statement} from "./_statement";
import {verNot, str, seq, IRunnable} from "../combi";
import {Source} from "../expressions";
import {Version} from "../../version";

export class ExportDynpro extends Statement {

  public getMatcher(): IRunnable {
    let ret = seq(str("EXPORT DYNPRO"),
                  new Source(),
                  new Source(),
                  new Source(),
                  new Source(),
                  str("ID"),
                  new Source());

    return verNot(Version.Cloud, ret);
  }

}