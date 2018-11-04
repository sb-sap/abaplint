import {Statement} from "./_statement";
import {verNot, str, seq, opt, IRunnable} from "../combi";
import {Source} from "../expressions";
import {Version} from "../../version";

export class DeleteReport extends Statement {

  public getMatcher(): IRunnable {
    let state = seq(str("STATE"), new Source());

    let ret = seq(str("DELETE REPORT"),
                  new Source(),
                  opt(state));

    return verNot(Version.Cloud, ret);
  }

}