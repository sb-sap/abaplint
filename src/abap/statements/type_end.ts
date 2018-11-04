import {Statement} from "./_statement";
import {str, seq, alt, IRunnable} from "../combi";
import {NamespaceSimpleName} from "../expressions";

export class TypeEnd extends Statement {

  public getMatcher(): IRunnable {
    let end = seq(str("END OF"), new NamespaceSimpleName());

    let ret = seq(alt(str("TYPE"), str("TYPES")), end);

    return ret;
  }

}