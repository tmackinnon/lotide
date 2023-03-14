// eqArrays function
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
//assertArrayEqual function
const assertArraysEqual = function(array1, array2) {
  
  if (!eqArrays(array1, array2)) {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);
    return;
  }
  console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
};

const letterPositions = function(sentence) {
  //function will return result object
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let character = sentence[i];

    //only continue if character is not a space
    if (character !== " ") {

      // if the results doesn't have a key that matches the character add the key and empty array
      if (!results[character]) {
        results[character] = [];
      }
      //then all characters should have a key value of an array 
      //so we can push the index value to the corresposnding key
      results[character].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;

//test:
// assertArraysEqual(letterPositions("tara").a, [1, 3]);