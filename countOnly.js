// assertEqual FUNCTION - Compares to values to see if their equal
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  // loop through each item in the array (in test case each name in firstNames)
  for (const item of allItems) {

    // check if the item is also in itemToCount 
    if (itemsToCount[item]) { 
      //then check if the item is already a key in results
      // if it is in results (result[item]) = truthy, then add 1 to its count
      if (results[item]) {
        results[item] += 1;
        //otherwise its not in results so we add that item to results and assign its count a 1
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
}


  //Test
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }); 
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);
