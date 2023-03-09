// FUNCTION assertEqual
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
};

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
}

// FUNCTION eqObjects
const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1) //array of keys in object1
  let key2 = Object.keys(object2)
  //compare key length 
  if (key1.length !== key2.length) {
    return false;
  }
  // loop through the keys
  for (key of key1) { 
    const value1 = object1[key];
    const value2 = object2[key];
    
    // check if value is an array (doesn't matter which one)
    if (Array.isArray(value1)) {
      // if the arrays dont match return false
      if (!eqArrays(value1, value2)) {
        return false;
      }
      // use continue to start the loop of the next key
      continue
    } 

    //for values that aren't arrays, check if the values are equal
    // if the values aren't equal return false
    if (value1 !== value2) {  
    return false;
    } 
  }
  //if it's not false for any of the cases above then it must be true!
  return true;
};

// // Tests
// //Test 1 (should pass):
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// assertEqual((eqObjects(shirtObject , anotherShirtObject)), true); 

// //Test 2
// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// assertEqual((eqObjects(shirtObject , longSleeveShirtObject)), false); 


// // Test 3
// const multiColorShirtObject = { colors: ["red", "blue"], size: ["medium", "large"] };
// const anotherMultiColorShirtObject = { size: ["medium", "small"], colors: ["red", "blue"] };
// assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), false); // pass

// //Test 4
// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // pass

// //Test 5
// const shirt1 = { colors: ["red", "blue"], size: ["medium", "small"] };
// const shirt2 = { size: ["medium", "small"], colors: ["red", "blue"] };
// assertEqual(eqObjects(shirt1, shirt2), true); 
