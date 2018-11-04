import {Statement} from "./_statement";
import {verNot, str, seq, alt, star, IRunnable} from "../combi";
import {Source, Constant, Field} from "../expressions";
import {Version} from "../../version";

export class CallKernel extends Statement {

  public getMatcher(): IRunnable {

    let field = seq(str("ID"),
                    new Source(),
                    str("FIELD"),
                    new Source());

    let ret = seq(str("CALL"),
                  alt(new Constant(), new Field()),
                  star(field));

    return verNot(Version.Cloud, ret);
  }

}