import express, { Application, Request, Response } from "express";
import todoroutes from "./todos/todos.routes";
let fs = require("fs");
const app: Application = express();

app.use(express.json());
app.use("/todos", todoroutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World, new express server.");
});

export default app;
