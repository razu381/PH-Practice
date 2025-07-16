import mongoose, { deleteModel } from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 18, max: 99 },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

// Post Schema
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  tags: [String],
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model("User", userSchema);
export const Post = mongoose.model("Post", postSchema);

export async function runExcercises() {
  try {
    //solution 1.1
    // let newUser = await User.create({
    //   username: "john_abraham",
    //   email: "john121@example.com",
    //   age: 25,
    // });
    // console.log(newUser);
    //solution 1.2
    // let multipleUser = await User.create([
    //   { username: "alice_smith", email: "alice@example.com", age: 30 },
    //   { username: "bob_wilson", email: "bob@example.com", age: 28 },
    //   { username: "carol_brown", email: "carol@example.com", age: 35 },
    // ]);
    //solution 1.3
    // let newUser2 = new User({
    //   username: "dave_jones",
    //   email: "dave@example.com",
    //   age: 22,
    // });
    // newUser2.save();
    // console.log(newUser2);
    //solution 1.4
    // let newPosts = await Post.create([
    //   {
    //     title: "Getting Started with MongoDB",
    //     content:
    //       "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It's perfect for modern applications that need to scale quickly and handle various data types.",
    //     author: "6874ba68195a98d4d25ea42c",
    //     tags: ["mongodb", "database", "nosql", "tutorial"],
    //     likes: 5,
    //   },
    //   {
    //     title: "Understanding Mongoose ODM",
    //     content:
    //       "Mongoose is an Object Document Mapper (ODM) for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your application data with built-in type casting, validation, query building, and business logic hooks.",
    //     author: "6874ba68195a98d4d25ea42a",
    //     tags: ["mongoose", "javascript", "nodejs", "odm"],
    //     likes: 12,
    //   },
    //   {
    //     title: "Building RESTful APIs with Express",
    //     content:
    //       "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Learn how to build scalable REST APIs with proper routing, middleware, and error handling.",
    //     author: "6874ba68195a98d4d25ea42a",
    //     tags: ["express", "api", "rest", "nodejs", "backend"],
    //     likes: 8,
    //   },
    // ]);
    //solution 2.1
    //let users = await User.find();
    //solution 2.2
    // let users = await User.find({ age: { $gte: 30 }, isActive: true });
    // console.log(users);
    //solution 2.3
    // let user = await User.findOne({
    //   email: "carol@example.com",
    //   username: "carol_brown",
    // });
    // console.log(user);
    //solution 2.4
    // let user = await User.findById("6874ba68195a98d4d25ea42c");
    // console.log(user);
    // let user = await User.findOne({
    //   _id: new mongoose.Types.ObjectId("6874ba68195a98d4d25ea42c"),
    // });
    // console.log(user);
    //solution 2.5
    // let users = await User.find({ age: { $gte: 25, $lte: 35 } })
    //   .select("username email age -_id")
    //   .sort({ age: -1 })
    //   .limit(5);
    // console.log(users);
    //solution 2.6
    // let posts = await Post.find();
    // console.log(posts);
    //solution 2.7
    // let post = await Post.find({ title: "Understanding Mongoose ODM" });
    // console.log(post);
    //solution 3.1
    // let updated_user = await User.findOneAndUpdate(
    //   { username: "john_doe" },
    //   { $set: { age: 18 } }
    //   //   { new: true }
    // );
    // console.log(updated_user);
    //solution 3.2
    // let update_active = await User.updateMany(
    //   { isActive: false },
    //   { $set: { isActive: true } }
    // );
    // console.log(update_active);
    //solution 3.3
    // let udpatePost = await Post.findOneAndUpdate(
    //   {
    //     title: "Building RESTful APIs with Express",
    //   },
    //   {
    //     $set: {
    //       title: "How to create RESTful APIs with Express",
    //     },
    //   }
    // );
    //solutoin 4.1
    // let deleted_user = await User.findOneAndDelete({ username: "john_doe" });
    // console.log(deleted_user);
    //solution 4.2
    // let deleted_users = await User.deleteMany({ isActive: false });
    // console.log(deleted_users);

    //solutoin 4.3 with error handling
    try {
      let deleted_post = await Post.findOneAndDelete({
        title: "Understanding Mongoose ODM",
      });

      if (!deleted_post) {
        throw new Error("No post was found");
      } else {
        console.log("Post deleted successfully");
      }
    } catch (err) {
      console.error(`There was an error deleting the post: ${err}`);
    }

    //populate authors as well
    let postsWithAuthors = await Post.find({
      title: "How to create RESTful APIs with Express",
    }).populate("author", "username email -_id");

    console.log(postsWithAuthors);
  } catch (err) {
    console.error("Error in the excercises: ", err);
  }
}
