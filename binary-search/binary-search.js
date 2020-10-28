"use strict";

// //search array for target
// //found: return true. else: false
// if (!array.length) {
//   return false;
// }

// if (array.length === 1) {
//   //given length 1, does it === target?
//   return array[0] === target ? true : false;
// }

// let midPoint = Math.ceil(array.length / 2);
// if (target === array[midPoint]) {
//   //target found
//   return true;
// } else if (target < array[midPoint]) {
//   //return left side of data RECURSIVELY
//   return binarySearch(array.slice(0, midPoint));
// } else if (target > array[midPoint]) {
//   //return right side of data RECURSIVELY
//   return binarySearch(array.slice(midPoint));
//   // } else {
//   //   // target is not a number
//   //   return false;
//   // }
// } else {
//   //no array length
//   return false;
// }

const dummyArr = [1, 3, 4, 5, 10, 15, 20, 22, 23, 98, 1000];

// Complete this algo
const binarySearch = (array, target) => {
  //search array for target
  //found: return true. else: false
  if (!array.length) {
    return false;
  }

  if (array.length === 1) {
    //given length 1, does it === target?
    return array[0] === target ? true : false;
  }

  let midPoint = Math.ceil(array.length / 2);
  if (target === array[midPoint]) {
    //target found
    return true;
  } else if (target < array[midPoint]) {
    //return left side of data RECURSIVELY
    return binarySearch(array.slice(0, midPoint));
  } else if (target > array[midPoint]) {
    //return right side of data RECURSIVELY
    return binarySearch(array.slice(midPoint));
    } else {
      // target is not a number
      return false;
		}

  } else {
    //no array length
    return false;
  }
};
console.log(binarySearch(dummyArr));
/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
