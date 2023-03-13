const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1,2,3],[1,2,3]); // return pass
assertArraysEqual([1,2,3],[1,4,3]); //return fail