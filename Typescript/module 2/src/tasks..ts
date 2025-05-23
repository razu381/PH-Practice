//Task 1
console.log(
  "Hello World, I will complete this course successfully and become a Next level Web Developer!"
);

//Task 2
type Func = (
  name: string,
  age: number,
  role?: "admin" | "user" | "guest"
) => void;

let testFunction: Func = (name, age, role) => {
  console.log(name, age, role);
};

testFunction("Razu", 26, "user");

//Task 3
interface Person {
  Name: string;
  Address: string;
  "Hair and Eye Color": string;
  "Income and Expense": string;
  Hobbies: string[];
  "Family Members": string[];
  Job: string;
  Skills: string[];
  "Marital Status": string;
  Friends: string[];
}

let person: Person = {
  Name: "Razu",
  Address: "Bashurhat,comapniganj, noakhail",
  "Hair and Eye Color": "black",
  "Income and Expense": "25000,20000",
  Hobbies: ["reading", "travelling", "running"],
  "Family Members": ["Father", "Mother", "Grandma"],
  Job: "freealnce wordpress designer",
  Skills: ["react", "js", "mongodb", "node", "express", "typesript"],
  "Marital Status": "unamrried",
  Friends: ["Arman", "faisal", "mojammel", "rakib"],
};
// console.log(person);

//Task 4
interface Book {
  title: string;
  IBAN: string;
  rating: number;
  price: number;
  publisher: string;
}

interface Magazine {
  title: string;
  rating: number;
  price: number;
  publisher: string;
}

type BoookMagazine = Book & Magazine;
type BookOrMagazine = Book | Magazine;

//Task 5
function reverse(str: string): string {
  let newStr = str.split("").reverse().join("");
  return newStr;
}

console.log(reverse("Razu"));

//Task 5 using recursion
function reverseWithRecursion(str: string, reversed: string = ""): string {
  if (str.length === 0) return reversed;
  reversed += str[str.length - 1];
  return reverseWithRecursion(str.slice(0, -1), reversed);
}

console.log(reverseWithRecursion("Razu"));

//Task 6
function sum(...values: any) {
  console.log(values);
}
sum(1, 2, 4, 5, 5, 5);
