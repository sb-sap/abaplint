import {regex as reg, Expression, IStatementRunnable} from "../combi";

export class SQLAsName extends Expression {
  public getRunnable(): IStatementRunnable {
// todo, below allows too much?
    return reg(/^[&_!]?\*?\w*(\/\w+\/)?\d*[a-zA-Z_%\$][\w\*%\$\?]*(~\w+)?$/);
  }
}