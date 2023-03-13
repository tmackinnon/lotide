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

module.exports = middle;