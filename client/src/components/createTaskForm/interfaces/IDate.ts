import { IDisabled } from "./IDisabled";

export interface IDate extends IDisabled {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
}
