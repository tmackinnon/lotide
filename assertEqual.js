// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //if two parameters don't match
  if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  console.log(`✅ Assertion Passed: ${actual} === ${expected}`);

};

// TEST CODE:
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("one", 1);
