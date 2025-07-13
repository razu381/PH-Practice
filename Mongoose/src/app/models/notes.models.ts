import mongoose, { model, Schema } from "mongoose";

const noteSchema = new mongoose.Schema<INOTES>({
  title: { type: String, required: true, trim: true },
  content: { type: String, default: "" },
  category: {
    type: String,
    enum: ["personal", "family", "learning", "social", "default"],
    default: "default",
  },
  pinned: {
    type: Boolean,
    default: false,
  },
  tags: {
    label: { type: String, required: true },
    color: { type: String, default: "#fff" },
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

export const Note = model("Note", noteSchema);
