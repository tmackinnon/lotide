const middle = require('../middle');
const assertArraysEqual = require ('../assertArraysEqual');

//Test 1:
assertArraysEqual(middle([1, '3', '3']), ['3']) 
assertArraysEqual(middle([]), []); 
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);

//Test 2:
// Make sure the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
assertArraysEqual(words, ["hello", "world", "lighthouse"]);