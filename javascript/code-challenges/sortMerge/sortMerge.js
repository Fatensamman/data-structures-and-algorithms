'use strict';
let arr = [8, 4, 23, 42, 16, 15];
const merge = (left, right) => {
  const arr = [];
  while (left.length && right.length) {
    if (left[0] > right[0]){
      arr.push( right.shift());
    }else {
      arr.push( left.shift());
    }
  }
  while (left.length) {
    arr.push(left.shift());
  }
  while (right.length) {
    arr.push(right.shift());
  }
  return arr;
};
const mergeSort = (arr) => {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
  }
  else return arr;
};
console.log(mergeSort(arr));

module.exports = mergeSort;
