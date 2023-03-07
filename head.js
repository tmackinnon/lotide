//assertEqual function
const assertEqual = function(actual, expected) {
  //if two inputs don't match
  if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  //if two inputs match
  console.log(`✅ Assertion Passed: ${actual} === ${expected}`);

};

// Head function
const head = function(array) {
  return array[0];
};

//Test the head function:
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]),);