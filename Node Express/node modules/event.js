let eventEmitter = require("node:events");

class MyEmitter extends eventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("event", () => {
  console.log("Event fired");
});

myEmitter.on("fire", () => {
  console.log("Fire serivce is on the way");
});

//myEmitter.emit("event");
myEmitter.emit("fire");
