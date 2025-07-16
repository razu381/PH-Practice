# Mongoose CRUD Operations Exercises

This file contains practical exercises to help you master CRUD (Create, Read, Update, Delete) operations using Mongoose.

## Prerequisites

- Basic understanding of Mongoose schemas and models
- MongoDB database connection setup
- Node.js environment with Mongoose installed

## Exercise Setup

First, create these schemas for the exercises:

```javascript
// User Schema
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

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);
```

---

## Exercise 1: CREATE Operations

### Task 1.1: Create Single User

Write code to create a single user with the following data:

- username: "john_doe"
- email: "john@example.com"
- age: 25

**Expected Result:** User should be saved to database and returned with generated `_id`.

### Task 1.2: Create Multiple Users

Create multiple users at once using an array:

```javascript
const usersData = [
  { username: "alice_smith", email: "alice@example.com", age: 30 },
  { username: "bob_wilson", email: "bob@example.com", age: 28 },
  { username: "carol_brown", email: "carol@example.com", age: 35 },
];
```

### Task 1.3: Create User with Instance Method

Create a user using the `new User()` constructor and then save it:

- username: "dave_jones"
- email: "dave@example.com"
- age: 22

### Task 1.4: Create Post with Reference

Create a post that references an existing user as the author:

- title: "My First Blog Post"
- content: "This is the content of my first blog post."
- author: (use the ObjectId of a user created in previous tasks)
- tags: ["javascript", "mongoose", "mongodb"]

---

## Exercise 2: READ Operations

### Task 2.1: Find All Users

Write code to retrieve all users from the database.

### Task 2.2: Find Users with Conditions

Find all users who are:

- Age greater than or equal to 30
- Active status is true

### Task 2.3: Find Single User

Find a specific user by:

- Email address
- Username

### Task 2.4: Find User by ID

Find a user using their ObjectId.

### Task 2.5: Advanced Query with Sorting and Limiting

Find users with the following criteria:

- Age between 25 and 35 (inclusive)
- Sort by age in descending order
- Limit results to 5 users
- Select only username, email, and age fields

### Task 2.6: Find Posts

Write code to retrieve all posts from the database.

### Task 2.7: Find Post by Title

Find a post by its exact title (e.g., "Understanding Mongoose ODM").

---

## Exercise 3: UPDATE Operations

### Task 3.1: Update Single User

Update a user's age to 26 where username is "john_doe".

### Task 3.2: Update Multiple Users

Update all users who are inactive (isActive: false) and set their isActive to true.

### Task 3.3: Update Post Content

Update the content of a post by its title.

---

## Exercise 4: DELETE Operations

### Task 4.1: Delete Single User

Delete a user by their username.

### Task 4.2: Delete Multiple Users

Delete all users who are inactive (isActive: false).

### Task 4.3: Delete Post by Title

Delete a post by its title.

---

## Bonus Challenge

### Challenge: Error Handling

Try to update or delete a user that does not exist and handle the error gracefully.
