"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let fs = require("fs");
let todosRouter = express_1.default.Router();
let existing_data = JSON.parse(fs.readFileSync("./src/app/db/todo.json", {
    encoding: "utf-8",
}));
todosRouter.get("/", (req, res) => {
    let data = fs.readFileSync("./src/app/db/todo.json", { encoding: "utf-8" });
    console.log(data);
    res.send(data);
});
todosRouter.get("/todo", (req, res) => {
    let id = req.query.id;
    let data_found = existing_data.filter((data) => data.id === id);
    res.send(data_found);
});
todosRouter.post("/todos", (req, res) => {
    let data = req.body;
    existing_data.push(data);
    fs.writeFileSync("./src/app/db/todo.json", JSON.stringify(existing_data), {
        encoding: "utf-8",
    });
    res.send(data);
});
todosRouter.get("/", (req, res) => {
    res.send("Hello World, new express server.");
});
exports.default = todosRouter;
