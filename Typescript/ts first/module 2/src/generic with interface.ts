type genericArray<T> = Array<T>;

let numArray: genericArray<number> = [3, 6, 6];
let stringArray: genericArray<string> = ["razu", "naba", "roman"];

// console.log({ numArray, stringArray });

const user: genericArray<{ name: string; age: number }> = [
  {
    name: "Razu",
    age: 20,
  },
  {
    name: "Rohit sharma",
    age: 25,
  },
];

console.log(user);
