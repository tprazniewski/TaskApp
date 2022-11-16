import { CounterStatus } from "../interfaces/ICounter";
import { Status } from "../../../createTaskForm/enums/Status";

export const emitBorderColour = (status: CounterStatus): string => {
  switch (status) {
    case Status.todo:
      return "error.light";
    case Status.inProgress:
      return "warning.light";
    case Status.completed:
      return "success.light";
  }
};
