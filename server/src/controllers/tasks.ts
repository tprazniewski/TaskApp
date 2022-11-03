import { appDataSource } from "../db/mysql";
import { Task } from "../entities/Task";
import { instanceToPlain } from "class-transformer";

export class TaskController {
  constructor(private taskRepository = appDataSource.getRepository(Task)) {}

  //   public async getAll(): Promise<Task[]> {
  public async getAll() {
    let allTasks: Task[];
    //get array of Task objects with data from DB
    try {
      allTasks = await this.taskRepository.find({
        order: {
          date: "ASC",
        },
      });
      allTasks = instanceToPlain(allTasks) as Task[];
      return allTasks;
    } catch (err) {
      console.log(err);
      return { message: err };
    }
  }
}
