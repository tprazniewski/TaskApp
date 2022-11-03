import { Router, Request, Response } from "express";
// import { TaskController } from "../controllers/tasks";
import { taskController } from "../controllers/tasks";
import { updateStatusValidator, createValidator } from "../utils/taskValidator";

const router = Router();

router.get("/", taskController.getAll);

// @ts-ignore
router.post("/", createValidator, taskController.create);

router.put("/", updateStatusValidator, taskController.update);

router.get("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {});
router.patch("/:id", (req, res) => {});

export default router;
