// assertEqual FUNCTION - Compares to values to see if their equal
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
};

const countLetters = function(string) {
letterCount = {};

// loop through each character in the string 
for (letter of string) {
  // if the character is not a space then continue to the next conditions
  if (letter !== " ") {
    // if the letter is not in our object letterCount, then add it and give it a value of 1 (bc we're counting it once)
    if (!letterCount[letter]) {
      letterCount[letter] = 1
    }
    //otherwise add one to the key value of the letter
    letterCount[letter] += 1;
  }
}
//return the object
return letterCount;
}

//Test
console.log(countLetters("lighthouse labs"));
