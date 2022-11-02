import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 666;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "this is the test route !" });
});
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
