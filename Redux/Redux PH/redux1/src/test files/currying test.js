// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// const addThree = add(3);

// const total = addThree(5);

// console.log(total);

// function add(a, b, c) {
//   return a + b + c;
// }

// // console.log(add(1, 2, 3));

// function curry(fn) {
//   return function (...args) {
//     if (args.length >= fn.length) {
//       return fn(...args);
//     } else {
//       return curry(fn.bind(null, ...args));
//     }
//   };
// }

// let curry2 = curry(add);
// let total = curry2(3);
// let newTotal = total(4);
// let finalTotal = newTotal(5);

// console.log(finalTotal);

// ========================================
// CURRY PROBLEM TO SOLVE:
// ========================================
//
// Problem: Create a curried function called "multiply" that can multiply three numbers.
// The function should work in the following ways:
//
// multiply(2, 3, 4) should return 24
// multiply(2)(3)(4) should return 24
// multiply(2, 3)(4) should return 24
// multiply(2)(3, 4) should return 24
//
// Requirements:
// 1. Create a base multiply function that takes three parameters (a, b, c)
// 2. Use the existing curry function to make it curried
// 3. Test all the different calling patterns mentioned above
// 4. Console.log each result to verify they all return 24
//
// YOUR CODE HERE:
// ==================

// Step 1: Create the base multiply function
function multiplyF(a, b, c) {
  return a * b * c;
}

// Step 2: Create the curried version
function curry(fn) {
  return function (...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return curry(fn.bind(null, ...args));
    }
  };
}

let multiply = curry(multiplyF);
console.log(multiply(2, 3, 4)); //should return 24
console.log(multiply(2)(3)(4)); //should return 24
console.log(multiply(2, 3)(4)); //should return 24
console.log(multiply(2)(3, 4)); //should return 24

// Step 3: Test all calling patterns
