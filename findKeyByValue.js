// assertEqual FUNCTION - Compares primitive values to see if they're equal
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
};

const findKeyByValue = function(object, value) {
  //loop through the object
  for (key in object) {
    //if the value matches the objects key value then return the name of the key
    if (value === object[key]) {
      return key;
    }
  }
}

//tests:
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

//cheatsheet for loop - key ->sci_fi, comedy, etc; object[key] -> "The expanse", "brooklyn..nine" etc.;