let fs = require("fs");

let args = process.argv.slice(2).join(" ");

fs.appendFile("./logs.txt", `${args} \n`, { encoding: "utf-8" }, (err) => {
  if (err) console.log("An error happened");
});
