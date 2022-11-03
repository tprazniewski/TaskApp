import { Router, Request, Response } from "express";
// import { TaskController } from "../controllers/tasks";
import { taskController } from "../controllers/tasks";
import { createValidator } from "../utils/taskValidator";
import { validationResult } from "express-validator";

const router = Router();

router.get("/", taskController.getAll);

// @ts-ignore
router.post("/", createValidator, async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).send(errors.array());
});

router.get("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {});
router.patch("/:id", (req, res) => {});

export default router;
