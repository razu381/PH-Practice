"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_routes_1 = __importDefault(require("./todos/todos.routes"));
let fs = require("fs");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/todos", todos_routes_1.default);
app.get("/", (req, res) => {
    res.send("Hello World, new express server.");
});
exports.default = app;
