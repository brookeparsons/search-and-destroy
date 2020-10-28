"use strict";

// Complete this algo
const minJumps = (arr, index = 0, count = 0, currentOption = 0) => {
  //look at first num... see it's options
  let newLength = arr.length - index;
  debugger;
  //base case
  if (index >= arr.length) return count;

  //only look at jump possibilities for arr[index] ..... check index + 1 and index +2
  for (let i = index; i <= arr[index]; i++) {
    //go over options this currentNum ha

    //
    currentOption =
      Math.abs(currentOption - newLength) < Math.abs(arr[i] - newLength)
        ? currentOption
        : arr[i];
  }
  count++;
  index = arr.indexOf(currentOption);
  return minJumps(arr, index, count);
};

module.exports = minJumps;
