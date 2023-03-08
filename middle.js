// eqArrays function
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

// asserArraysEqual function
const assertArraysEqual = function(array1, array2) {
  
  //if two arrays don't match, assertion failed
  if (!eqArrays(array1, array2)) {
    console.log(`❌ Assertion Failed`);
    return;
  }

  //otherwise the arrays match, assertion passed
  console.log(`✅ Assertion Passed`);

};

// middle function
const middle = function(array) {
  let output = [];
  // array w/ 1 or 2 elements should return an emppty array
  if (array.length < 3) {
    return output;
  }
  // array with odd number of elements
  if (array.length % 2 !== 0) {
    output.push(array[Math.floor(array.length / 2)])
    return output
  }
  //the only remaining option is an even numbered array so no if statement neded
  //calculate the midway index of the array 
  let i = (array.length / 2)
  //push the two mid point elements (i - 1 goes 1st so it's in the correct order) to the output array
  output.push(array[i - 1], array[i]);
  return output;
}

//Test 1:
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])) // output:[4, 5]
console.log(middle([1, '3', '3'])) // output:['3']
console.log(middle([])) // output:[]

//Test 2:
// Make sure the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
console.log(middle(words));
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

/* PLAN
input: takes in an array 
processing: 3 possibilities
  1 - Arrays with one or two elements, there is no middle. Return an empty array.
  2 - Arays with odd number of elements, return array containing a single middle element
  3 - Arrays with even number of elements, return an array containing the two elements in the middle 
output: an array (either empty, with one element or with 2 elements )
*/