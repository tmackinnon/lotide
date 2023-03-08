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
  // let equal be true so that it can change via the if statement
  let equal = true

  // loop through the elements in each array 
  for (let i = 0; i <array1.length; i++) {
    // if corresponding elements in arrays don't match, reassign equal to false otherwise it stays true
    if (array1[i] !== array2[i]) {
      equal = false;  
    }
  }
  return equal;
}

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);  