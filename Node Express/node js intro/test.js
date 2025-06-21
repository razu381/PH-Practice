let { add, substract } = require("./util.js");

console.log(add(2, 3));
console.log(substract(3, 2));

((num1, num2) => {
  console.log("Hello World");
  console.log(num1 + num2);
})(1, 2);
