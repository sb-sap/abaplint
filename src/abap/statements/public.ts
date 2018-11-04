import {Statement} from "./_statement";
import {str, IRunnable} from "../combi";

export class Public extends Statement {

  public getMatcher(): IRunnable {
    return str("PUBLIC SECTION");
  }

}