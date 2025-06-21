let fs = require("fs");

console.log("Reading file");
let data = fs.readFileSync("./input.txt", { encoding: "utf-8" });

console.log("reading finished", data);

console.log("Writting file");

fs.writeFileSync("./input.txt", "Hi this is new", { encoding: "utf-8" });

data = fs.readFileSync("./input.txt", { encoding: "utf-8" });

console.log("Writting file finished");
console.log("reading again after rewrite ", data);
