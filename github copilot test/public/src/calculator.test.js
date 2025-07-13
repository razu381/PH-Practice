// Calculator Test Suite
// This file contains comprehensive tests for the calculator functions

// Test Suite for addNumbers function
function testAddNumbers() {
  console.log("Running tests for addNumbers function...");
  let passedTests = 0;
  let totalTests = 0;

  // Test cases for addNumbers
  const addTests = [
    // Basic positive numbers
    { a: 2, b: 3, expected: 5, description: "2 + 3 = 5" },
    { a: 10, b: 5, expected: 15, description: "10 + 5 = 15" },
    { a: 100, b: 200, expected: 300, description: "100 + 200 = 300" },
    { a: 1, b: 1, expected: 2, description: "1 + 1 = 2" },
    { a: 7, b: 8, expected: 15, description: "7 + 8 = 15" },

    // Negative numbers
    { a: -5, b: -3, expected: -8, description: "-5 + (-3) = -8" },
    { a: -10, b: -20, expected: -30, description: "-10 + (-20) = -30" },
    { a: -1, b: -1, expected: -2, description: "-1 + (-1) = -2" },
    { a: -15, b: -25, expected: -40, description: "-15 + (-25) = -40" },
    { a: -100, b: -50, expected: -150, description: "-100 + (-50) = -150" },

    // Mixed positive and negative
    { a: 5, b: -3, expected: 2, description: "5 + (-3) = 2" },
    { a: -5, b: 3, expected: -2, description: "-5 + 3 = -2" },
    { a: 10, b: -10, expected: 0, description: "10 + (-10) = 0" },
    { a: -20, b: 30, expected: 10, description: "-20 + 30 = 10" },
    { a: 25, b: -15, expected: 10, description: "25 + (-15) = 10" },

    // Zero cases
    { a: 0, b: 0, expected: 0, description: "0 + 0 = 0" },
    { a: 0, b: 5, expected: 5, description: "0 + 5 = 5" },
    { a: 10, b: 0, expected: 10, description: "10 + 0 = 10" },
    { a: -5, b: 0, expected: -5, description: "-5 + 0 = -5" },
    { a: 0, b: -8, expected: -8, description: "0 + (-8) = -8" },

    // Decimal numbers
    { a: 1.5, b: 2.5, expected: 4, description: "1.5 + 2.5 = 4" },
    { a: 3.14, b: 2.86, expected: 6, description: "3.14 + 2.86 = 6" },
    { a: 0.1, b: 0.2, expected: 0.3, description: "0.1 + 0.2 = 0.3" },
    { a: -1.5, b: 1.5, expected: 0, description: "-1.5 + 1.5 = 0" },
    { a: 2.7, b: -1.2, expected: 1.5, description: "2.7 + (-1.2) = 1.5" },

    // Large numbers
    { a: 1000, b: 2000, expected: 3000, description: "1000 + 2000 = 3000" },
    { a: 999999, b: 1, expected: 1000000, description: "999999 + 1 = 1000000" },
    {
      a: -50000,
      b: 25000,
      expected: -25000,
      description: "-50000 + 25000 = -25000",
    },
    {
      a: 123456,
      b: 654321,
      expected: 777777,
      description: "123456 + 654321 = 777777",
    },
    {
      a: 1000000,
      b: -500000,
      expected: 500000,
      description: "1000000 + (-500000) = 500000",
    },

    // Small decimal precision
    { a: 0.01, b: 0.02, expected: 0.03, description: "0.01 + 0.02 = 0.03" },
    {
      a: 0.001,
      b: 0.002,
      expected: 0.003,
      description: "0.001 + 0.002 = 0.003",
    },
    { a: -0.5, b: 0.3, expected: -0.2, description: "-0.5 + 0.3 = -0.2" },
    { a: 0.99, b: 0.01, expected: 1, description: "0.99 + 0.01 = 1" },
    {
      a: 1.111,
      b: 2.222,
      expected: 3.333,
      description: "1.111 + 2.222 = 3.333",
    },

    // Edge cases with fractions
    { a: 1 / 3, b: 2 / 3, expected: 1, description: "1/3 + 2/3 = 1" },
    { a: 0.25, b: 0.75, expected: 1, description: "0.25 + 0.75 = 1" },
    { a: 1.25, b: 2.75, expected: 4, description: "1.25 + 2.75 = 4" },
    { a: -0.25, b: -0.75, expected: -1, description: "-0.25 + (-0.75) = -1" },
    { a: 0.333, b: 0.667, expected: 1, description: "0.333 + 0.667 = 1" },

    // Random test cases
    { a: 42, b: 58, expected: 100, description: "42 + 58 = 100" },
    { a: 17, b: 23, expected: 40, description: "17 + 23 = 40" },
    { a: -37, b: 49, expected: 12, description: "-37 + 49 = 12" },
    { a: 88, b: -33, expected: 55, description: "88 + (-33) = 55" },
    { a: 99, b: 1, expected: 100, description: "99 + 1 = 100" },

    // More edge cases
    { a: 13, b: 87, expected: 100, description: "13 + 87 = 100" },
    { a: -99, b: 198, expected: 99, description: "-99 + 198 = 99" },
    { a: 50.5, b: 49.5, expected: 100, description: "50.5 + 49.5 = 100" },
    { a: -25.25, b: 25.25, expected: 0, description: "-25.25 + 25.25 = 0" },
    {
      a: 0.0001,
      b: 0.0002,
      expected: 0.0003,
      description: "0.0001 + 0.0002 = 0.0003",
    },

    // Final test cases to reach 50+
    { a: 777, b: 223, expected: 1000, description: "777 + 223 = 1000" },
    { a: -456, b: 456, expected: 0, description: "-456 + 456 = 0" },
    { a: 3.3333, b: 6.6667, expected: 10, description: "3.3333 + 6.6667 = 10" },
    {
      a: 12.34,
      b: 56.78,
      expected: 69.12,
      description: "12.34 + 56.78 = 69.12",
    },
    { a: -9.99, b: 19.99, expected: 10, description: "-9.99 + 19.99 = 10" },
    { a: 0.5, b: 0.5, expected: 1, description: "0.5 + 0.5 = 1" },
    { a: 9.5, b: 0.5, expected: 10, description: "9.5 + 0.5 = 10" },
    { a: -7.5, b: 2.5, expected: -5, description: "-7.5 + 2.5 = -5" },
    {
      a: 1.234,
      b: 5.678,
      expected: 6.912,
      description: "1.234 + 5.678 = 6.912",
    },
    {
      a: 999.999,
      b: 0.001,
      expected: 1000,
      description: "999.999 + 0.001 = 1000",
    },
  ];

  // Run all tests
  addTests.forEach((test, index) => {
    totalTests++;
    const result = addNumbers(test.a, test.b);
    const passed = Math.abs(result - test.expected) < 0.0001; // Handle floating point precision

    if (passed) {
      passedTests++;
      console.log(`✅ Test ${index + 1}: ${test.description} - PASSED`);
    } else {
      console.log(`❌ Test ${index + 1}: ${test.description} - FAILED`);
      console.log(`   Expected: ${test.expected}, Got: ${result}`);
    }
  });

  console.log(
    `\naddNumbers Test Summary: ${passedTests}/${totalTests} tests passed`
  );
  return { passed: passedTests, total: totalTests };
}

// Test Suite for subtractNumbers function
function testSubtractNumbers() {
  console.log("\nRunning tests for subtractNumbers function...");
  let passedTests = 0;
  let totalTests = 0;

  // Test cases for subtractNumbers
  const subtractTests = [
    // Basic positive numbers
    { a: 5, b: 3, expected: 2, description: "5 - 3 = 2" },
    { a: 10, b: 5, expected: 5, description: "10 - 5 = 5" },
    { a: 100, b: 50, expected: 50, description: "100 - 50 = 50" },
    { a: 8, b: 2, expected: 6, description: "8 - 2 = 6" },
    { a: 15, b: 7, expected: 8, description: "15 - 7 = 8" },

    // Negative numbers
    { a: -5, b: -3, expected: -2, description: "-5 - (-3) = -2" },
    { a: -10, b: -5, expected: -5, description: "-10 - (-5) = -5" },
    { a: -20, b: -30, expected: 10, description: "-20 - (-30) = 10" },
    { a: -1, b: -1, expected: 0, description: "-1 - (-1) = 0" },
    { a: -100, b: -50, expected: -50, description: "-100 - (-50) = -50" },

    // Mixed positive and negative
    { a: 5, b: -3, expected: 8, description: "5 - (-3) = 8" },
    { a: -5, b: 3, expected: -8, description: "-5 - 3 = -8" },
    { a: 10, b: -10, expected: 20, description: "10 - (-10) = 20" },
    { a: -20, b: 30, expected: -50, description: "-20 - 30 = -50" },
    { a: 25, b: -15, expected: 40, description: "25 - (-15) = 40" },

    // Zero cases
    { a: 0, b: 0, expected: 0, description: "0 - 0 = 0" },
    { a: 5, b: 0, expected: 5, description: "5 - 0 = 5" },
    { a: 0, b: 5, expected: -5, description: "0 - 5 = -5" },
    { a: -5, b: 0, expected: -5, description: "-5 - 0 = -5" },
    { a: 0, b: -8, expected: 8, description: "0 - (-8) = 8" },

    // Decimal numbers
    { a: 5.5, b: 2.5, expected: 3, description: "5.5 - 2.5 = 3" },
    { a: 3.14, b: 1.14, expected: 2, description: "3.14 - 1.14 = 2" },
    { a: 1.5, b: 0.5, expected: 1, description: "1.5 - 0.5 = 1" },
    { a: -1.5, b: 1.5, expected: -3, description: "-1.5 - 1.5 = -3" },
    { a: 2.7, b: -1.3, expected: 4, description: "2.7 - (-1.3) = 4" },

    // Large numbers
    { a: 3000, b: 1000, expected: 2000, description: "3000 - 1000 = 2000" },
    {
      a: 1000000,
      b: 500000,
      expected: 500000,
      description: "1000000 - 500000 = 500000",
    },
    {
      a: -50000,
      b: 25000,
      expected: -75000,
      description: "-50000 - 25000 = -75000",
    },
    {
      a: 777777,
      b: 123456,
      expected: 654321,
      description: "777777 - 123456 = 654321",
    },
    {
      a: 1000000,
      b: -500000,
      expected: 1500000,
      description: "1000000 - (-500000) = 1500000",
    },

    // Small decimal precision
    { a: 0.03, b: 0.01, expected: 0.02, description: "0.03 - 0.01 = 0.02" },
    {
      a: 0.005,
      b: 0.002,
      expected: 0.003,
      description: "0.005 - 0.002 = 0.003",
    },
    { a: -0.5, b: 0.3, expected: -0.8, description: "-0.5 - 0.3 = -0.8" },
    { a: 1, b: 0.01, expected: 0.99, description: "1 - 0.01 = 0.99" },
    {
      a: 3.333,
      b: 1.111,
      expected: 2.222,
      description: "3.333 - 1.111 = 2.222",
    },

    // Edge cases with fractions
    { a: 1, b: 1 / 3, expected: 2 / 3, description: "1 - 1/3 = 2/3" },
    { a: 1, b: 0.25, expected: 0.75, description: "1 - 0.25 = 0.75" },
    { a: 4, b: 1.25, expected: 2.75, description: "4 - 1.25 = 2.75" },
    { a: -1, b: -0.25, expected: -0.75, description: "-1 - (-0.25) = -0.75" },
    { a: 1, b: 0.333, expected: 0.667, description: "1 - 0.333 = 0.667" },

    // Random test cases
    { a: 100, b: 42, expected: 58, description: "100 - 42 = 58" },
    { a: 40, b: 17, expected: 23, description: "40 - 17 = 23" },
    { a: 12, b: -37, expected: 49, description: "12 - (-37) = 49" },
    { a: 55, b: 88, expected: -33, description: "55 - 88 = -33" },
    { a: 100, b: 99, expected: 1, description: "100 - 99 = 1" },

    // Same numbers (should equal 0)
    { a: 5, b: 5, expected: 0, description: "5 - 5 = 0" },
    { a: 100, b: 100, expected: 0, description: "100 - 100 = 0" },
    { a: -25, b: -25, expected: 0, description: "-25 - (-25) = 0" },
    { a: 3.14, b: 3.14, expected: 0, description: "3.14 - 3.14 = 0" },
    { a: 0.5, b: 0.5, expected: 0, description: "0.5 - 0.5 = 0" },

    // More edge cases
    { a: 99, b: -99, expected: 198, description: "99 - (-99) = 198" },
    { a: 100, b: 50.5, expected: 49.5, description: "100 - 50.5 = 49.5" },
    {
      a: 25.25,
      b: -25.25,
      expected: 50.5,
      description: "25.25 - (-25.25) = 50.5",
    },
    {
      a: 0.0003,
      b: 0.0001,
      expected: 0.0002,
      description: "0.0003 - 0.0001 = 0.0002",
    },
    { a: 1000, b: 777, expected: 223, description: "1000 - 777 = 223" },

    // Final test cases to reach 50+
    { a: 456, b: -456, expected: 912, description: "456 - (-456) = 912" },
    { a: 10, b: 3.3333, expected: 6.6667, description: "10 - 3.3333 = 6.6667" },
    {
      a: 69.12,
      b: 12.34,
      expected: 56.78,
      description: "69.12 - 12.34 = 56.78",
    },
    {
      a: 19.99,
      b: -9.99,
      expected: 29.98,
      description: "19.99 - (-9.99) = 29.98",
    },
    { a: 7.5, b: 2.5, expected: 5, description: "7.5 - 2.5 = 5" },
    { a: 1.5, b: 1.5, expected: 0, description: "1.5 - 1.5 = 0" },
    {
      a: 8.888,
      b: 3.333,
      expected: 5.555,
      description: "8.888 - 3.333 = 5.555",
    },
    { a: -12.5, b: -7.5, expected: -5, description: "-12.5 - (-7.5) = -5" },
    {
      a: 0.9999,
      b: 0.0001,
      expected: 0.9998,
      description: "0.9999 - 0.0001 = 0.9998",
    },
    {
      a: 1234.5678,
      b: 234.5678,
      expected: 1000,
      description: "1234.5678 - 234.5678 = 1000",
    },
  ];

  // Run all tests
  subtractTests.forEach((test, index) => {
    totalTests++;
    const result = subtractNumbers(test.a, test.b);
    const passed = Math.abs(result - test.expected) < 0.0001; // Handle floating point precision

    if (passed) {
      passedTests++;
      console.log(`✅ Test ${index + 1}: ${test.description} - PASSED`);
    } else {
      console.log(`❌ Test ${index + 1}: ${test.description} - FAILED`);
      console.log(`   Expected: ${test.expected}, Got: ${result}`);
    }
  });

  console.log(
    `\nsubtractNumbers Test Summary: ${passedTests}/${totalTests} tests passed`
  );
  return { passed: passedTests, total: totalTests };
}

// Function to run all tests
function runAllTests() {
  console.log("=".repeat(50));
  console.log("RUNNING ALL CALCULATOR TESTS");
  console.log("=".repeat(50));

  const addResults = testAddNumbers();
  const subtractResults = testSubtractNumbers();

  console.log("\n" + "=".repeat(50));
  console.log("FINAL TEST SUMMARY");
  console.log("=".repeat(50));
  console.log(
    `addNumbers: ${addResults.passed}/${addResults.total} tests passed`
  );
  console.log(
    `subtractNumbers: ${subtractResults.passed}/${subtractResults.total} tests passed`
  );
  console.log(
    `Total: ${addResults.passed + subtractResults.passed}/${
      addResults.total + subtractResults.total
    } tests passed`
  );

  const overallSuccess =
    addResults.passed === addResults.total &&
    subtractResults.passed === subtractResults.total;
  console.log(
    overallSuccess ? "🎉 ALL TESTS PASSED!" : "⚠️  Some tests failed"
  );
}

// Make test functions available globally for manual execution
window.testAddNumbers = testAddNumbers;
window.testSubtractNumbers = testSubtractNumbers;
window.runAllTests = runAllTests;

// Auto-run tests when this file is loaded
console.log(
  "Calculator test suite loaded! Run runAllTests() to execute all tests."
);
