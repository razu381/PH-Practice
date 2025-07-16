import express, { Application, Request, Response } from "express";
import mongoose, { model } from "mongoose";
// import { before } from "node:test";
// import { Note } from "./app/models/notes.models";
// import { notesRoutes } from "./app/controllers/notes.controller";
// import { userRoutes } from "./app/controllers/user.controller";

const app: Application = express();

// app.use(express.json());
// app.use("/notes", notesRoutes);
// app.use("/users", userRoutes);

app.get("/", async (req: Request, res: Response) => {
  res.send("Welcome to our note app");
});

export default app;
