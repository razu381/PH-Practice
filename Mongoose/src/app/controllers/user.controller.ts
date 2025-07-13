import express, { Application, Request, Response } from "express";
import { userModel } from "../models/user.model";
import { optional, z } from "zod";
import bcrypt from "bcryptjs";

export const userRoutes = express.Router();

const zodSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  email: z.string(),
  password: z.string(),
  role: z.string().optional(),
});

userRoutes.get("/", async (req, res) => {
  let users = await userModel.find().sort({ email: "desc" });

  res.status(200).json({
    success: true,
    message: "users listed here",
    users,
  });
});

userRoutes.post("/create-user", async (req, res) => {
  try {
    //let data = await zodSchema.parseAsync(req.body);
    let data = req.body;

    // let pass = await bcrypt.hash(data.password, 10);
    // console.log(pass);

    let user = await userModel.create(data);

    // let pass = await user.hashPassword(data.password);

    // user.password = pass;
    // await user.save();

    res.status(201).json({
      success: true,
      message: "user created",
      user,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      err,
    });
  }
});

userRoutes.put("/update-user/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;

    // Validate the incoming data using zodSchema
    await zodSchema.parseAsync(data);

    const updatedUser = await userModel.findByIdAndUpdate(id, data, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation is applied
    });

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      err,
    });
  }
});

userRoutes.delete("/delete-user/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log("ID=", id);
    // Use mongoose's findByIdAndDelete to remove the user
    const deletedUser = await userModel.findOneAndDelete({ _id: id });

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      user: deletedUser,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      err,
    });
  }
});
