// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
};

//FUNCTION findKey
const findKey = function(object, callback) {
  let keysArray = Object.keys(object);
  //loop through the keys of the object
  for (let key of keysArray) {
    if (callback(object[key])) {
      return key;
    }
  }
};

//Test:
const object = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 3 },
  "Akelarre": { stars: 3 }
};

let results1 = findKey(object, x => x.stars !== 2);

let results2 = findKey(object, x => x.stars === 6);

assertEqual(results1, "Blue Hill");
assertEqual(results2, undefined);