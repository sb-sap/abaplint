import {Statement} from "./_statement";
import {verNot, str, IRunnable} from "../combi";
import {Version} from "../../version";

export class EndCatch extends Statement {

  public getMatcher(): IRunnable {
    let ret = str("ENDCATCH");
    return verNot(Version.Cloud, ret);
  }

}