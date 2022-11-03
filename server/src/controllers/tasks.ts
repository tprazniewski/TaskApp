import { appDataSource } from "../db/mysql";
import { Task } from "../entities/Task";
import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";

class TaskController {
  //   public async getAll(): Promise<Task[]> {
  public async getAll(req: Request, res: Response): Promise<Response> {
    let allTasks: Task[];
    //get array of Task objects with data from DB
    try {
      allTasks = await appDataSource.getRepository(Task).find({
        order: {
          date: "ASC",
        },
      });
      allTasks = instanceToPlain(allTasks) as Task[];
      return res.status(200).send(allTasks);
    } catch (err) {
      return res.status(500).send({ err: "Internal server error" });
    }
  }
}

export const taskController = new TaskController();
