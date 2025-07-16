import "dotenv/config";
import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";

let server: Server;
const port = 3000;

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://razu381:${process.env.PASS}@cluster0.ve9ya7v.mongodb.net/advanced-note?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("connected to mongodb using mongoose");
    server = app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
