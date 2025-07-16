// Sample Schemas
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 18, max: 99 },
});

userSchema.index(
  {
    username: 1,
    age: 1,
  },
  { unique: true }
);

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  tags: [String],
  likes: { type: Number, default: 0 },
});

userSchema.virtual("nameAge").get(function () {
  return `${this.username} ${this.age}`;
});

// Add middleware to schema BEFORE creating the model.it work after validation before saving
userSchema.pre("save", function () {
  console.log("BEFORE saving a new user");
});

userSchema.post("save", function () {
  console.log("After user is saved");
});
userSchema.pre("validate", function () {
  console.log(
    "------------------------------------------------------------During the validation phase"
  );
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

export async function runPopulalte() {
  try {
  } catch (err) {
    console.error("There has been an error: ", err);
  }
}
