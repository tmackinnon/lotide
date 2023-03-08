// compare the two arrays, if their length doesn't match, return false
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  
  if (!eqArrays(array1, array2)) {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);
    return;
  }
  console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
};

// Flattens array a single level deep
const flatten = function(input) {
  // create variable to be final output
  let flattenedArray = [];

  // loop through each item of outer array
  for (let i = 0; i < input.length; i++) {

    //if item type not an array push value to flattenedArray
    if (!Array.isArray(input[i])) {
      flattenedArray.push(input[i]);
    }
    //otherwise loop again then push value to flattened Array
    for (let j = 0; j < input[i].length; j++) {
      flattenedArray.push(input[i][j]);
    }
  }
  return flattenedArray;
};

assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [1, 2, 3, 4, 5, 6]); // pass