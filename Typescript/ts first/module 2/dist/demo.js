"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create some sample data
const user1 = {
    name: "John Doe",
    age: 30,
    phone: "123-456-7890"
};
const user2 = {
    name: "Jane Smith",
    age: 25,
    email: "jane@example.com",
    phone: "098-765-4321"
};
const nameAndAge = {
    name: user1.name,
    age: user1.age
};
const contact = {
    email: "contact@example.com",
    phone: "555-555-5555"
};
// Display the results
console.log("=== TypeScript Demo Running on Linux ===");
console.log("\nUser 1:", user1);
console.log("User 2:", user2);
console.log("\nName and Age only:", nameAndAge);
console.log("Contact Info only:", contact);
const stringUser = {
    name: "Alice",
    age: "28",
    email: "alice@example.com",
    phone: "111-222-3333"
};
console.log("\nMapped Type User (all strings):", stringUser);
console.log("\n=== Demo Complete ===");
//# sourceMappingURL=demo.js.map