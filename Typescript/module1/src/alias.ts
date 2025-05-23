type User = {
  name: string;
  age: number;
  address: string;
  isEngineer: boolean;
};

let user1: User = {
  name: "Razu",
  age: 30,
  address: "Nakhalara,companiganj, noakhali",
  isEngineer: true,
};

let { name: userName } = user1;
let { age, name: user, ...rest } = user1;
console.log(rest);

type Add = (num1: number, num2: number) => number;

let addNum: Add = (num1, num2) => num1 + num2;

console.log(addNum(4, 4));
