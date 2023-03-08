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
}

//function will compare two arrays (using eqArrays function), will log if the assertion passed or failed
const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`❌ Assertion Failed`);
    return;
  }
  console.log(`✅ Assertion Passed`);
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
}

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse", "tara"])); //["hello", "world"]

// Make sure the original array was not altered by the without function:
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // pass 