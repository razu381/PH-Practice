import { Note } from "../models/notes.models";
import express, { Application, Request, Response } from "express";

export const notesRoutes = express.Router();

notesRoutes.post("/create-note", async (req: Request, res: Response) => {
  const myNote = req.body;
  const note_created = await Note.create(myNote);

  res.status(201).json({
    success: true,
    message: "Note created",
    note: note_created,
  });
});

notesRoutes.get("/", async (req: Request, res: Response) => {
  let notesFound = await Note.find().populate("user");

  res.status(200).json({
    success: true,
    message: "Notes sent",
    notes: notesFound,
  });
});

notesRoutes.get("/:id", async (req: Request, res: Response) => {
  let id = req.params.id;
  let noteFound = await Note.findById(id);

  res.status(200).json({
    success: true,
    message: "Note found",
    note: noteFound,
  });
});

notesRoutes.put("/:id", async (req: Request, res: Response) => {
  let id = req.params.id;
  let data = req.body;
  let updated_note = await Note.findByIdAndUpdate(id, data, {
    returnDocument: "after",
  });

  res.status(200).json({
    success: true,
    message: "Note updated",
    updated_note,
  });
});
