# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tmackinnon/lotide`

**Require it:**

`const _ = require('@tmackinnon/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: returns the first item in the given array
* `tail()`: takes in an arrat and returns everything except the first item in it
* `middle()`: takes in an array and returns the middle-most element(s) of the given array, if array is one or two elements, returns empty array
* `assertArraysEqual()`: takes in two arrays and console.logs 'passed' if they are equal and 'failed' if they are not
* `assertEqual()`: take in two values and console.logs 'passed' if they are equal and 'failed' if they are not
* `assertObjectsEqual()`: takes in two objects and console.logs 'passed' if they are equal and 'failed' if they are not
* `countLetters()`: takes in a sentence (as a string) then returns a count of each of the letters in that sentence
* `countOnly()`: takes in a collection of items and returns the counts for a specific subset of those items
* `eqArrays()`: compares two arrays for a perfect match
* `eqObjects()`: takes in two objects and returns true or false, based on if they are a match
* `findKey()`: takes in an object and a callback, will scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined
* `findKeyByValue()`: takes in an object & value, scans the object and returns the first key which contains the given value. If no key with that given value is found, then it should return undefined
* `flatten()`: takes in an array containing elements (including nested arrays), and returns a "flattened" version of the array
* `letterPosition()`: returns all the indices in the string where each character is found
* `map()`: returns a new array based on the results of the callback function
* `takeUntil()`: collects items from a provided array until the callback provided returns a truthy value
* `without()`: returns a subset of a given array, removing unwanted elements