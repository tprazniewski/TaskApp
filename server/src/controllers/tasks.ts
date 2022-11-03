import { appDataSource } from "../db/mysql";
import { Task } from "../entities/Task";
import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { validationResult } from "express-validator";

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
  public async create(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).send(errors.array());

    //Create a new instance of a task
    const { title, date, description, priority, status } = req.body;
    let newTask = new Task();
    // @ts-ignore
    newTask = { title, date, description, priority, status };
    let createTask: Task;
    try {
      createTask = await appDataSource.getRepository(Task).save(newTask);
      createTask = instanceToPlain(createTask) as Task;
      return res.status(201).send(createTask);
    } catch (err) {
      return res.status(400).send({ error: " internal server errro" });
    }
  }
}

export const taskController = new TaskController();
