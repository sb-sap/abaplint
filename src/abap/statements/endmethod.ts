import {Statement} from "./_statement";
import {str, IRunnable} from "../combi";

export class Endmethod extends Statement {

  public getMatcher(): IRunnable {
    return str("ENDMETHOD");
  }

}