import express from "express";
import taskRoutes from "./routers/tasks";
import dotenv from "dotenv";
import { appDataSource } from "./db/mysql";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT || 666;

const app = express();
//use Body Parser
app.use(bodyParser.json());
app.use(cors());

app.use("/tasks", taskRoutes);

appDataSource
  .initialize()
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
  )
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.status(200).send({ message: "this is the test route !" });
});
