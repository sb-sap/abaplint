import {Statement} from "./_statement";
import {verNot, str, seq, IStatementRunnable} from "../combi";
import {Source} from "../expressions";
import {Version} from "../../version";

export class DeleteDynpro extends Statement {

  public getMatcher(): IStatementRunnable {
    const ret = seq(str("DELETE DYNPRO"), new Source());

    return verNot(Version.Cloud, ret);
  }

}