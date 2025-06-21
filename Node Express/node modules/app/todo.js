let http = require("http");
let path = require("path");
let fs = require("fs");
const { URL } = require("url");

const filePath = path.join(__dirname, "./db/todo.json");
//console.log(filePath);
let file_data = fs.readFileSync(filePath, { encoding: "utf-8" });

let server = http.createServer((req, res) => {
  let url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/" && req.method === "GET") {
    res.end("Hello world");
  } else if (url.pathname === "/todos" && req.method === "GET") {
    res.writeHead(201, {
      "content-type": "application/json",
      "x-email": "sirazu52@gmail.com",
    });
    res.end(file_data);
  } else if (url.pathname === "/todo" && req.method === "GET") {
    res.writeHead(201, {
      "content-type": "application/json",
      "x-email": "sirazu52@gmail.com",
    });
    let title = url.searchParams.get("title");
    let tasks = JSON.parse(
      fs.readFileSync("./db/todo.json", { encoding: "utf-8" })
    );
    tasks.forEach((element) => {
      console.log(element.task, title);
    });
    let matchedTask = tasks.find((task) => task.task === title);
    console.log(matchedTask);
    res.end(JSON.stringify(matchedTask));
  } else if (url.pathname === "/todos" && req.method === "POST") {
    let posted_data = "";
    req.on("data", (chunk) => {
      posted_data += chunk;
    });
    req.on("end", () => {
      let existing_data = JSON.parse(file_data);
      existing_data.push(JSON.parse(posted_data));
      //console.log(existing_data);
      fs.writeFileSync(filePath, JSON.stringify(existing_data), {
        encoding: "utf-8",
      });
      res.end(posted_data);
    });
  } else if (url.pathname === "/todos" && req.method === "PUT") {
    let updated_data = "";
    req.on("data", (chunk) => {
      updated_data += chunk;
    });
    req.on("end", () => {
      let existing_data = JSON.parse(file_data);
      let id = url.searchParams.get("id");

      let idx = existing_data.findIndex((task) => task.id === id);
      console.log("data on that index", existing_data[idx]);
      existing_data[idx].task = updated_data;

      fs.writeFileSync(filePath, JSON.stringify(existing_data), {
        encoding: "utf-8",
      });
      res.end(updated_data);
    });
  } else if (url.pathname === "/todos" && req.method === "DELETE") {
    let id = url.searchParams.get("id");
    let existing_data = JSON.parse(file_data);

    let filtered_taks = existing_data.filter((task) => task.id != id);
    fs.writeFileSync(filePath, JSON.stringify(filtered_taks), {
      encoding: "utf-8",
    });

    res.end("data deleted successfully");
  } else {
    res.end("Route not found");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Server running on port 5000");
});
