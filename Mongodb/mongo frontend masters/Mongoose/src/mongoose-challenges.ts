import e from "express";
import mongoose, { model } from "mongoose";

//solution 1
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  birthDate: { type: Date, required: true },
  profileViews: { type: Number, default: 0 },
});

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

userSchema.virtual("age").get(function () {
  const currentDate = new Date();
  const birthDate = new Date(this.birthDate);
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth() - birthDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
});

userSchema.virtual("profileUrl").get(function () {
  let url = `/users/${this.firstName}-${this.lastName}`;

  return url.toLowerCase();
});

// let User = mongoose.model("User", userSchema);

//solution 2
const productSchema = new mongoose.Schema({
  name: String,
  category: String, // 20 categories (medium cardinality)
  price: Number,
  brand: String, // 100 brands (medium cardinality)
  inStock: Boolean, // 2 values (low cardinality)
  rating: Number,
  sellerId: mongoose.Types.ObjectId, // 10,000 sellers (high cardinality)
  tags: [String],
  createdAt: Date,
});

productSchema.index({
  sellerId: 1,
  createdAt: -1,
});
productSchema.index({
  category: 1,
  raing: 1,
  stock: 1,
});
productSchema.index({
  brand: 1,
  price: 1,
});
productSchema.index({
  tags: "text",
});

//solution 3
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Types.ObjectId, ref: "User" },
  slug: String,
  status: { type: String, enum: ["draft", "published"], default: "draft" },
  publishedAt: Date,
  readTime: Number, // in minutes
  tags: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
});

postSchema.pre("save", function () {
  let splited = this.title?.split(" ");
  let newSlug = "";
  splited?.forEach((word, idx) => {
    newSlug += `${word}`;
    if (idx < splited.length - 1) {
      newSlug += "-";
    }
    console.log(newSlug);
  });
  this.slug = newSlug.toLowerCase();

  let numOfWords = this.content?.split(" ").length;
  let readingTime = Math.ceil((numOfWords as number) / 250);
  console.log(readingTime);
});

postSchema.post("save", function () {
  this.status = "published";
  this.createdAt = new Date();
});

let Post = model("post", postSchema);

//solution 4
const getFeed = async (userId: number) => {
  const user = await User.findById(userId).lean();
  const posts = await Post.find({
    author: { $in: user.following },
  })
    .populate("author", "username")
    .populate("comments.user", "username comment")
    .sort({ createdAt: -1 })
    .limit(20);

  return posts;
};

//i would write index on userId and author
//limit works fine and i will add skip to it

//solution 5
const userSchema5 = new mongoose.Schema({
  username: String,
  email: String,
  lastLogin: Date,
  loginCount: { type: Number, default: 0 },
  subscription: {
    type: String,
    enum: ["free", "premium", "enterprise"],
    default: "free",
  },
  createdAt: { type: Date, default: Date.now },
});

userSchema5.virtual("isActive").get(function () {
  const currentDate = new Date();
  const lastLoginDate = this.lastLogin;
  let lastLoginDay = currentDate.getFullYear() - lastLoginDate.getFullYear();
  const month = currentDate.getMonth() - lastLoginDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < lastLoginDate.getDate())
  ) {
    lastLoginDay--;
  }

  return lastLoginDay;
});

let User5 = model("user5", userSchema5);

export async function runVirtualChallenges() {
  const user5 = await User5.create({
    username: "testuser",
    email: "test3@example.com",
    lastLogin: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
    subscription: "premium",
  });
  console.log(user5);
  console.log("virtual from function", user5?.isActive);
}
