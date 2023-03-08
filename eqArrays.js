const assertEqual = function(actual, expected) {
  //if two inputs don't match
  if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  //if two inputs match
  console.log(`✅ Assertion Passed: ${actual} === ${expected}`);

};

const eqArrays = function(array1, array2) {
  //check that the lengths of the arrays match, otherwise return false
  if (array1.length !== array2.length) {
    return false;
  }

  //// loop through the elements in each array 
  for (let i = 0; i < array1.length; i++) {
    //if the element doesn't match then stop the loop and return false
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  //otherwise return true
  return true; 
}

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);  