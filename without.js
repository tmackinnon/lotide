const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  // loop through the elements of the arrays, if they don't match return false
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

//function will compare two arrays (using eqArrays function), will log if the assertion passed or failed
const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);
    return;
  }
  console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
};

//function takes two arrays, compares them, removes items and returns a new array without those items
const without = function(source, itemsToRemove) {
  let newArray = [];
  // loop through the items in the source array
  for (let i = 0; i < source.length; i++) {
    // if item from the source array does not appear in the itemsToRemove array then can be added to our new array
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

module.exports = without;

// //Test 1:
// console.log(without(["1", "2", "3"], [1, 2, "3"]));
// // Make sure the original array was not altered by the without function:
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // pass

// //Test 2:
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);