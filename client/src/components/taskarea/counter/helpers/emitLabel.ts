import { CounterStatus } from "../interfaces/ICounter";
import { Status } from "../../../createTaskForm/enums/Status";

export const emitLAbel = (status: CounterStatus): string => {
  switch (status) {
    case Status.todo:
      return "Todo's";
    case Status.inProgress:
      return "In Progress";
    case Status.completed:
      return "Completed ";
  }
};
