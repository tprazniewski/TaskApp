import { appDataSource } from "../db/mysql";
import { Task } from "../entities/Task";
import { instanceToPlain, plainToInstance } from "class-transformer";
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { UpdateResult, DeleteResult } from "typeorm";

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
    console.log("weszlo");
    try {
      console.log("task", newTask);
      createTask = await appDataSource.getRepository(Task).save(newTask);
      createTask = instanceToPlain(createTask) as Task;
      return res.status(201).send(createTask);
    } catch (err) {
      return res.status(400).send({ error: " internal server errro" });
    }
  }
  // @ts-ignore
  public async update(req: Request, res: Response): Promise<Response> {
    const { id, status } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).send(errors.array());

    let task: Task | null;

    try {
      task = await appDataSource.getRepository(Task).findOne({ where: { id } });
    } catch (error) {
      return res.status(500).send({ error: "internal server error" });
      // or user not found
    }
    if (!task) {
      return res.status(404).send({ message: "user not found" });
    }
    let updateTask: UpdateResult;

    try {
      updateTask = await appDataSource
        .getRepository(Task)
        .update(id, plainToInstance(Task, { status }));
      updateTask = instanceToPlain(updateTask) as UpdateResult;
      return res.status(204).send(updateTask);
    } catch (err) {
      return res.status(500).send({ err: "Internal server error" });
    }
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.body;
    let task: Task | null;
    try {
      task = await appDataSource.getRepository(Task).findOne({ where: { id } });
    } catch (error) {
      return res.status(500).send({ error: "internal server error" });
      // or user not found
    }
    if (!task) {
      return res.status(404).send({ message: "user not found" });
    }
    let deleteTask: DeleteResult;

    try {
      deleteTask = await appDataSource.getRepository(Task).delete(id);
      deleteTask = instanceToPlain(deleteTask) as UpdateResult;

      return res.status(202).send(instanceToPlain(task));
    } catch (err) {
      return res.status(500).send({ err: "Internal server error" });
    }
  }
}
export const taskController = new TaskController();
