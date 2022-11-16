import { IHeader } from "./IHeader";
import { IDescription } from "./IDescription";
import { IFooter } from "./IFooter";

export interface ITask extends IHeader, IDescription, IFooter {
  priority?: string;
}
