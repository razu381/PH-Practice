import "dotenv/config";
import { Server } from "http";
import app from "./app";
import mongoose, { model } from "mongoose";
import { runPopulalte } from "./populate_and_complex_query_questions";
import { runVirtualChallenges } from "./mongoose-challenges";

let server: Server;
const port = 3000;

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://razu381:${process.env.PASS}@cluster0.ve9ya7v.mongodb.net/fem-test?retryWrites=true&w=majority&appName=Cluster0`
    );

    // -----------------------------------------------------------------------

    // runPopulalte();
    runVirtualChallenges();

    // -----------------------------------------------------------------------

    server = app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
