import { Router } from "express";
import { TaskController } from "../controllers/tasks";

const router = Router();

router.get("/", async (req, res) => {
  const taskController = new TaskController();
  const result = await taskController.getAll();
  res.status(200).send(result);
});
router.get("/:id", (req, res) => {});
router.post("/", (req, res) => {});
router.delete("/:id", (req, res) => {});
router.patch("/:id", (req, res) => {});

export default router;
