"use strict";

const dummyArr = [1, 3, 4, 5, 10, 15, 20, 22, 23, 98, 1000];
const target = 10;

// Complete this algo
const binarySearch = (array, target) => {
  debugger;
  //search array for target
  //found: return true. else: false
  if (!array.length) {
    return false;
  }
  //BASE CASE
  if (array.length === 1) {
    debugger;
    //given length 1, does it === target?
    return array[0] === target ? true : false;
  }

  let midPoint = Math.ceil(array.length / 2);
  if (target === array[midPoint]) {
    debugger;
    //target found
    return true;
  } else if (target < array[midPoint]) {
    debugger;
    //return left side of data RECURSIVELY
    return binarySearch(array.slice(0, midPoint), target);
  } else if (target > array[midPoint]) {
    debugger;
    //return right side of data RECURSIVELY
    return binarySearch(array.slice(midPoint), target);
  } else {
    debugger;
    // target is not a number
    return false;
  }
};

console.log(binarySearch(dummyArr, target));
/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
