//FUNCTION eqArrays
const eqArrays = function(array1, array2) {
  //check that the lengths of the arrays match, otherwise return false
  if (array1.length !== array2.length) {
    return false;
  }
  // loop through the elements in each array
  for (let i = 0; i < array1.length; i++) {
    //if the element doesn't match then stop the loop and return false
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// FUNCTION eqObjects
const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    return false;
  }

  for (let key of key1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
      continue;
    }

    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  //if two objects don't match, assertion failed
  if (!eqObjects(actual, expected)) {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return;
  }

  //otherwise the  objects match, assertion passed
  console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
};

// Test:
// const shirt1 = { colors: ["red", "blue"], size: ["medium", "small"] };
// const shirt2 = { size: ["medium", "small"], colors: ["red", "blue"] };
// assertObjectsEqual(shirt1, shirt2);

module.exports = assertObjectsEqual;