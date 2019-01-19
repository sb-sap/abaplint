"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Structures = require("./");
const Statements = require("../statements");
const _structure_1 = require("./_structure");
const _combi_1 = require("./_combi");
const _statement_1 = require("../statements/_statement");
class Normal extends _structure_1.Structure {
    getMatcher() {
        // note that the sequence of alternatives here influences performance
        return _combi_1.alt(_combi_1.sta(Statements.Move), _combi_1.sta(Statements.Call), _combi_1.sta(Statements.Data), _combi_1.sub(new Structures.If()), _combi_1.sta(Statements.Clear), _combi_1.sta(Statements.FieldSymbol), _combi_1.sta(Statements.CreateObject), _combi_1.sta(Statements.CallFunction), _combi_1.sta(_statement_1.MacroCall), _combi_1.sub(new Structures.Loop()), _combi_1.sta(Statements.Append), _combi_1.sub(new Structures.Try()), _combi_1.sta(Statements.ReadTable), _combi_1.sta(Statements.Assert), _combi_1.sta(Statements.Return), _combi_1.sta(Statements.Select), _combi_1.sta(Statements.Assign), _combi_1.sta(Statements.InsertInternal), _combi_1.sta(Statements.DeleteInternal), _combi_1.sta(Statements.Concatenate), _combi_1.sub(new Structures.Case()), _combi_1.sta(Statements.AddCorresponding), _combi_1.sta(Statements.Add), _combi_1.sta(Statements.AssignLocalCopy), _combi_1.sta(Statements.AuthorityCheck), _combi_1.sta(Statements.Back), _combi_1.sta(Statements.Break), _combi_1.sta(Statements.BreakId), _combi_1.sta(Statements.CallDatabase), _combi_1.sta(Statements.CallDialog), _combi_1.sta(Statements.CallKernel), _combi_1.sta(Statements.CallOLE), _combi_1.sta(Statements.CallScreen), _combi_1.sta(Statements.CallSelectionScreen), _combi_1.sta(Statements.CallTransaction), _combi_1.sta(Statements.CallTransformation), _combi_1.sta(Statements.Check), _combi_1.sta(Statements.ClassDefinitionLoad), _combi_1.sta(Statements.CloseCursor), _combi_1.sta(Statements.CloseDataset), _combi_1.sta(Statements.Collect), _combi_1.sta(Statements.Commit), _combi_1.sta(Statements.Communication), _combi_1.sta(Statements.Compute), _combi_1.sta(Statements.CallBadi), _combi_1.sta(Statements.Condense), _combi_1.sta(Statements.Constant), _combi_1.sta(Statements.Contexts), _combi_1.sta(Statements.Continue), _combi_1.sta(Statements.ConvertText), _combi_1.sta(Statements.Convert), _combi_1.sta(Statements.CreateData), _combi_1.sta(Statements.CreateOLE), _combi_1.sta(Statements.DeleteCluster), _combi_1.sta(Statements.DeleteDatabase), _combi_1.sta(Statements.DeleteDataset), _combi_1.sta(Statements.DeleteDynpro), _combi_1.sta(Statements.DeleteMemory), _combi_1.sta(Statements.DeleteReport), _combi_1.sta(Statements.DeleteTextpool), _combi_1.sta(Statements.Demand), _combi_1.sta(Statements.Describe), _combi_1.sta(Statements.Detail), _combi_1.sta(Statements.Divide), _combi_1.sta(Statements.EditorCall), _combi_1.sta(Statements.Exit), _combi_1.sta(Statements.ExportDynpro), _combi_1.sta(Statements.Export), _combi_1.sta(Statements.Extract), _combi_1.sta(Statements.FetchNext), _combi_1.sta(Statements.FieldGroup), _combi_1.sta(Statements.Fields), _combi_1.sta(Statements.Find), _combi_1.sta(Statements.Format), _combi_1.sta(Statements.FreeMemory), _combi_1.sta(Statements.FreeObject), _combi_1.sta(Statements.Free), _combi_1.sta(Statements.GenerateDynpro), _combi_1.sta(Statements.GenerateReport), _combi_1.sta(Statements.GenerateSubroutine), _combi_1.sta(Statements.GetBadi), _combi_1.sta(Statements.GetBit), _combi_1.sta(Statements.GetCursor), _combi_1.sta(Statements.GetDataset), _combi_1.sta(Statements.GetLocale), _combi_1.sta(Statements.GetParameter), _combi_1.sta(Statements.GetPFStatus), _combi_1.sta(Statements.GetProperty), _combi_1.sta(Statements.GetReference), _combi_1.sta(Statements.GetRunTime), _combi_1.sta(Statements.GetTime), _combi_1.sta(Statements.Hide), _combi_1.sta(Statements.ImportDynpro), _combi_1.sta(Statements.ImportNametab), _combi_1.sta(Statements.Import), _combi_1.sta(Statements.Infotypes), _combi_1.sta(Statements.Include), // include does not have to be at top level
        _combi_1.sta(Statements.InsertDatabase), _combi_1.sta(Statements.InsertReport), _combi_1.sta(Statements.InsertTextpool), _combi_1.sta(Statements.Leave), _combi_1.sta(Statements.LoadReport), _combi_1.sta(Statements.Local), _combi_1.sta(Statements.LogPoint), _combi_1.sta(Statements.Message), _combi_1.sta(Statements.ModifyLine), _combi_1.sta(Statements.ModifyDatabase), _combi_1.sta(Statements.ModifyInternal), _combi_1.sta(Statements.Multiply), _combi_1.sta(Statements.NewLine), _combi_1.sta(Statements.NewPage), _combi_1.sta(Statements.OpenCursor), _combi_1.sta(Statements.OpenDataset), _combi_1.sta(Statements.Overlay), _combi_1.sta(Statements.Pack), _combi_1.sta(Statements.Perform), _combi_1.sta(Statements.Position), _combi_1.sta(Statements.Put), _combi_1.sta(Statements.PrintControl), _combi_1.sta(Statements.RaiseEvent), _combi_1.sta(Statements.Raise), _combi_1.sta(Statements.Ranges), _combi_1.sta(Statements.ReadDataset), _combi_1.sta(Statements.ReadLine), _combi_1.sta(Statements.ReadReport), _combi_1.sta(Statements.ReadTextpool), _combi_1.sta(Statements.Receive), _combi_1.sta(Statements.RefreshControl), _combi_1.sta(Statements.Refresh), _combi_1.sta(Statements.Reject), _combi_1.sta(Statements.Replace), _combi_1.sta(Statements.Reserve), _combi_1.sta(Statements.Resume), _combi_1.sta(Statements.Retry), _combi_1.sta(Statements.Rollback), _combi_1.sta(Statements.Scan), _combi_1.sta(Statements.ScrollList), _combi_1.sta(Statements.Search), _combi_1.sta(Statements.SetBit), _combi_1.sta(Statements.SetBlank), _combi_1.sta(Statements.SetCountry), _combi_1.sta(Statements.SetCursor), _combi_1.sta(Statements.SetDataset), _combi_1.sta(Statements.SetExtendedCheck), _combi_1.sta(Statements.SetHandler), _combi_1.sta(Statements.SetLanguage), _combi_1.sta(Statements.SetLeft), _combi_1.sta(Statements.SetLocale), _combi_1.sta(Statements.SetMargin), _combi_1.sta(Statements.SetParameter), _combi_1.sta(Statements.SetPFStatus), _combi_1.sta(Statements.SetProperty), _combi_1.sta(Statements.SetRunTime), _combi_1.sta(Statements.SetScreen), _combi_1.sta(Statements.SetTitlebar), _combi_1.sta(Statements.SetUserCommand), _combi_1.sta(Statements.SetUpdateTask), _combi_1.sta(Statements.Shift), _combi_1.sta(Statements.Skip), _combi_1.sta(Statements.SortDataset), _combi_1.sta(Statements.Sort), _combi_1.sta(Statements.Static), _combi_1.sta(Statements.Split), _combi_1.sta(Statements.Stop), _combi_1.sta(Statements.Submit), _combi_1.sta(Statements.Summary), _combi_1.sta(Statements.SubtractCorresponding), _combi_1.sta(Statements.Subtract), _combi_1.sta(Statements.SuppressDialog), _combi_1.sta(Statements.Supply), _combi_1.sta(Statements.Sum), _combi_1.sta(Statements.SyntaxCheck), _combi_1.sta(Statements.SystemCall), _combi_1.sta(Statements.Tables), _combi_1.sta(Statements.Transfer), _combi_1.sta(Statements.Translate), _combi_1.sta(Statements.Type), _combi_1.sta(Statements.Uline), _combi_1.sta(Statements.Unassign), _combi_1.sta(Statements.Unpack), _combi_1.sta(Statements.UpdateDatabase), _combi_1.sta(Statements.Wait), _combi_1.sta(Statements.Window), _combi_1.sta(Statements.Write), _combi_1.sub(new Structures.Define()), _combi_1.sub(new Structures.TestInjection()), _combi_1.sub(new Structures.TestSeam()), _combi_1.sub(new Structures.Provide()), _combi_1.sub(new Structures.CatchSystemExceptions()), _combi_1.sub(new Structures.At()), _combi_1.sub(new Structures.Constants()), _combi_1.sub(new Structures.Types()), _combi_1.sub(new Structures.Statics()), _combi_1.sub(new Structures.Select()), _combi_1.sub(new Structures.Data()), _combi_1.sub(new Structures.TypeEnum()), _combi_1.sub(new Structures.While()), _combi_1.sub(new Structures.Do()), _combi_1.sub(new Structures.ExecSQL()));
    }
}
exports.Normal = Normal;
