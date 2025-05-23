import { add, addArrow } from "./functions";

// let myName: string = "Razu";
// let age: number = 123;

// console.log(myName, age);

const user: {
  company: string;
  name: string;
  age: number;
} = {
  company: "Monster lab",
  name: "Razu",
  age: 23,
};

console.log(add(5, 5));
console.log(addArrow(5, 5));
