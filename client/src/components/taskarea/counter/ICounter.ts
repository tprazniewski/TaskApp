import { Status } from "../../createTaskForm/enums/Status";

export type CounterStatus = Status.todo | Status.inProgress | Status.completed;

export interface ICounter {
  count?: number;
  status?: CounterStatus;
}
