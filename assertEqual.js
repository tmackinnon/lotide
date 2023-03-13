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

module.exports = assertEqual;