let fs = require("fs");

console.log("Writting to file");

fs.writeFile("./input.txt", "Hi", { encoding: "utf-8" }, (err) => {});
console.log("Writting file finsihed");

console.log("Reading file started");

let data;

fs.readFile("./input.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("There has been an error ");
    return;
  }
  console.log(data);
});

console.log("Reading finished");
