const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//test eqArrays function
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);  