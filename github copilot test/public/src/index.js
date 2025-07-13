document.getElementById("addBtn").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = addNumbers(num1, num2);
  document.getElementById("result").textContent = `Result: ${result}`;
});
document.getElementById("subBtn").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = subtractNumbers(num1, num2);
  document.getElementById("result").textContent = `Result: ${result}`;
});
//a function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

//a function to subtract two numbers

function subtractNumbers(a, b) {
  return a - b;
}

//a function to make a string lowercase or uppsercase depending on the parameter passed
function changeCase(str, toUpperCase) {
  if (toUpperCase) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
}
