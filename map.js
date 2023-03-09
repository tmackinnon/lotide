// eqArrays FUNCTION
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
}

// assertArrayEqual FUNCTION
const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);
    return;
  }
  console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5]

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word + "ya");
const results3 = map(numbers, num => 4);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, ['groundya', 'controlya', 'toya', 'majorya', 'tomya']);
assertArraysEqual(results3, [4, 4, 4, 4, 4]);