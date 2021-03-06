import {Statement} from "./_statement";
import {verNot, str, seq, IStatementRunnable} from "../combi";
import {Source} from "../expressions";
import {Version} from "../../version";

export class Window extends Statement {

  public getMatcher(): IStatementRunnable {
    const ret = seq(str("WINDOW STARTING AT"),
                    new Source(),
                    new Source(),
                    str("ENDING AT"),
                    new Source(),
                    new Source());

    return verNot(Version.Cloud, ret);
  }

}