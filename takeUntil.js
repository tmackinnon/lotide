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

const takeUntil = function(array, callback) {
  let newArray = [];

  for (element of array) {

    if(!callback(element)) {
      newArray.push(element);
      continue;
    } 
    break;
  };
  return newArray;
}

//test1:
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]) // compares actual result and expected

console.log('---');

//test 2:
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);



  