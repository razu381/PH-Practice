import { Model, model, Schema } from "mongoose";
import { ref } from "process";
import validator from "validator";
import {
  IUSER,
  UserInstaceMethod,
  userStaticMethod,
} from "../interfaces/user interface";
import bcrypt from "bcryptjs";
import { Note } from "./notes.models";

let addressSchema = new Schema<ADDRESS>(
  {
    city: String,
    street: String,
    district: String,
  },
  { _id: false }
);

let userSchema = new Schema<IUSER, userStaticMethod, UserInstaceMethod>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      min: [18, "Must be at least 18, got {VALUE}"],
      max: 60,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //   validate: {
      //     validator: function (v) {
      //       return /@+/.test(v);
      //     },
      //     message: (props) => `${props.value} is not a valid email`,
      //   },
      validate: [validator.isEmail],
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    address: {
      type: addressSchema,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

userSchema.method("hashPassword", async function (plainPass) {
  let pass = await bcrypt.hash(plainPass, 10);
  return pass;
});
userSchema.static("hashPassword", async function (plainPass) {
  let pass = await bcrypt.hash(plainPass, 10);
  return pass;
});

//prehook for password encryption
userSchema.pre("save", async function (next) {
  let pass = await bcrypt.hash(this.password, 5);
  this.password = pass;
  next();
});

//posthook
userSchema.post("save", async function () {
  console.log("Post created, message from post save hook");
});

userSchema.post("findOneAndDelete", async function (doc, next) {
  if (doc) {
    await Note.deleteMany({ user: doc._id });
    next();
  }
});

//virtual
userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

export let userModel = model<IUSER, userStaticMethod>("User", userSchema);
