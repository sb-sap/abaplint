import {CountableNode} from "./_countable_node";
import {Token} from "../tokens/_token";

export class TokenNode extends CountableNode {
  private token: Token;

  public constructor(token: Token) {
    super();
    this.token = token;
  }

  public get(): Token {
    return this.token;
  }

  public countTokens(): number {
    return super.countTokens() + 1;
  }

  public getFirstToken(): Token {
    return this.token;
  }

  public getLastToken(): Token {
    return this.token;
  }
}

export class TokenNodeRegex extends TokenNode {

}