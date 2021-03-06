import {Structure} from "./_structure";
import * as Statements from "../statements";
import {star, alt, sta, sub, IStructureRunnable} from "./_combi";
import {Types, Data, ClassData, Constants, TypeEnum} from ".";

export class SectionContents extends Structure {

  public getMatcher(): IStructureRunnable {
// todo, start should be plus instead?
    return star(alt(sta(Statements.MethodDef),
                    sta(Statements.InterfaceDef),
                    sta(Statements.Data),
                    sta(Statements.ClassData),
                    sta(Statements.Events),
                    sta(Statements.Constant),
                    sta(Statements.Aliases),
                    sta(Statements.TypePools),
                    sta(Statements.InterfaceLoad),
                    sta(Statements.ClassDefinitionLoad),
                    sub(new Types()),
                    sub(new Constants()),
                    sub(new TypeEnum()),
                    sub(new Data()),
                    sub(new ClassData()),
                    sta(Statements.Type)));
  }
}