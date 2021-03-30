'use strict';
module.exports = function BinarySearch(arr, m) {
  let lower = 0;
  let upper = arr.length - 1;
  while (lower <= upper) {
    let mid = lower + Math.floor((upper - lower) / 2);
    if (m === arr[mid]) {
      return mid;
    } else if (m < arr[mid]) {
      upper = mid - 1;
    } else {
      lower = mid + 1;
    }
  }
  return -1;
};
