import express, { Application, Request, Response } from "express";
let fs = require("fs");
const app: Application = express();

app.use(express.json());

app.get("/todos", (req, res) => {
  let data = fs.readFileSync("./db/todo.json", { encoding: "utf-8" });
  console.log(data);
  res.send(data);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World, new express server.");
});

export default app;
