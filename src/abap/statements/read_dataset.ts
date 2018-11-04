import {Statement} from "./_statement";
import {verNot, str, seq, opt, IRunnable} from "../combi";
import {Target, Source} from "../expressions";
import {Version} from "../../version";

export class ReadDataset extends Statement {

  public getMatcher(): IRunnable {
    let ret = seq(str("READ DATASET"),
                  new Source(),
                  str("INTO"),
                  new Target(),
                  opt(seq(str("MAXIMUM LENGTH"), new Source())),
                  opt(seq(str("ACTUAL LENGTH"), new Target())),
                  opt(seq(str("LENGTH"), new Target())));

    return verNot(Version.Cloud, ret);
  }

}