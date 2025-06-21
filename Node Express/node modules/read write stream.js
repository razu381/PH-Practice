let fs = require("fs");

let readStream = fs.createReadStream("./input.txt", { encoding: "utf-8" });
let writeStream = fs.createWriteStream("./new input.txt", {
  encoding: "utf-8",
});

readStream.on("data", (chunk) => {
  console.log(
    "Received this chunk ------------------------------------------------------------------------",
    chunk
  );

  writeStream.write(chunk);
});

readStream.on("end", () => {
  console.log("Reading ended");
  writeStream.end();
});
