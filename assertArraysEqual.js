const eqArrays = require('./eqArrays')

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

module.exports = assertArraysEqual;