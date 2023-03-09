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
  let key1 = Object.keys(object1)
  let key2 = Object.keys(object2)
  //compare the number of keys in each object
  // or shoud I be comparing the two arrays 
  if (key1.length !== key2.length) {
    return false;
  }
  
  // compare the value for each key in one object - is it the same as the value for that same key in the other object
  for (let key of key1) {
    if (object1[key] !== object2[key]) {

      if (Array.isArray(object1[key])) {

        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } 
      return false;
    } 
  }
  return true;
};

//Tests
//Test 1 (should pass):
//const shirtObject = { color: "red", size: "medium" };
//const anotherShirtObject= { size: "medium", color: "red" };
//assertEqual((eqObjects(shirtObject , anotherShirtObject)), true); 

//const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
//assertEqual((eqObjects(shirtObject , longSleeveShirtObject)), false); 


//Test 2 (should pass):
const multiColorShirtObject = { colors: ["red", "blue"], size: ["medium", "mall"] };
const anotherMultiColorShirtObject = { size: ["medium", "small"], colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), false); // pass

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // pass
