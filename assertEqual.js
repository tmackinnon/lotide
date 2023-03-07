// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //if two inputs don't match
  if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  //if two inputs match
  console.log(`✅ Assertion Passed: ${actual} === ${expected}`);

};

// TEST CODE:
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("one", 1);
