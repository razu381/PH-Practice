// Demo TypeScript file to test the setup
interface User {
  name: string;
  age: number;
  email?: string;
  phone: string;
}

// Create some sample data
const user1: User = {
  name: "John Doe",
  age: 30,
  phone: "123-456-7890"
};

const user2: User = {
  name: "Jane Smith",
  age: 25,
  email: "jane@example.com",
  phone: "098-765-4321"
};

// Using Pick utility type
type NameAge = Pick<User, "name" | "age">;
const nameAndAge: NameAge = {
  name: user1.name,
  age: user1.age
};

// Using Omit utility type
type ContactInfo = Omit<User, "name" | "age">;
const contact: ContactInfo = {
  email: "contact@example.com",
  phone: "555-555-5555"
};

// Display the results
console.log("=== TypeScript Demo Running on Linux ===");
console.log("\nUser 1:", user1);
console.log("User 2:", user2);
console.log("\nName and Age only:", nameAndAge);
console.log("Contact Info only:", contact);

// Using mapped types
type NewUser = {
  [key in keyof User]: string
};

const stringUser: NewUser = {
  name: "Alice",
  age: "28",
  email: "alice@example.com",
  phone: "111-222-3333"
};

console.log("\nMapped Type User (all strings):", stringUser);
console.log("\n=== Demo Complete ===");
