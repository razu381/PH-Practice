import { Server } from "http";
import app from "./app";
import mongoose, { model } from "mongoose";
import { runPopulalte } from "./populate_and_complex_query_questions";

let server: Server;
const port = 3000;

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://razu381:Evanevan381@cluster0.ve9ya7v.mongodb.net/fem-test?retryWrites=true&w=majority&appName=Cluster0"
    );

    // -----------------------------------------------------------------------
    // let newUser = await User.create({
    //   userName: "john!@#",
    //   email: "sirazu512@gmail.com",
    //   age: "26",
    // });

    // let newStudent = await Student.create({
    //   name: "razu",
    //   email: "sirazu342@gmail.com",

    //   info: {
    //     school: "BCM",
    //     Roll: 3,
    //     Parent: {
    //       name: "Belal",
    //       contact: "khalashi bari",
    //     },
    //     hobbies: ["farming", "gardening"],
    //   },
    // });

    runPopulalte();

    // -----------------------------------------------------------------------

    server = app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
