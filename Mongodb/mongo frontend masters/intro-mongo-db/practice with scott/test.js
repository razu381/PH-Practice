const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/whatever");
};

const student = new mongoose.Schema({
  firstName: String,
  lastName: String,
});

const Student = mongoose.model("student", student);

// Add this test code
const runTest = async () => {
  try {
    await connect();
    console.log("Connected to MongoDB!");

    // Create a test student
    const newStudent = new Student({
      firstName: "John",
      lastName: "Doe",
    });

    await newStudent.save();
    console.log("Student saved:", newStudent);

    mongoose.connection.close();
  } catch (error) {
    console.error("Error:", error);
  }
};

runTest();
