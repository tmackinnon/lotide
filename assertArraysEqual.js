// compare the two arrays, if their length doesn't match, return false
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
  //otherwise return true
  return true; 
}

//function will compare two arrays (using eqArrays function), will log if the assertion passed or failed
const assertArraysEqual = function(array1, array2) {
  
  //if two arrays don't match, assertion failed
  if (!eqArrays(array1, array2)) {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);
    return;
  }

  //otherwise the arrays match, assertion passed
  console.log(`✅ Assertion Passed: ${array1} === ${array2}`);

};

assertArraysEqual([1,2,3],[1,2,3]); // return pass
assertArraysEqual([1,2,3],[1,4,3]); //return fail