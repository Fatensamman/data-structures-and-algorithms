'use strict';
const sort = require('../sort.js');


describe('should sort the array', () => {
  it('Can successfully instantiate an empty tree', () => {
    let arr = [8, 4, 23, 42, 32, 10];
    expect(sort(arr)).toStrictEqual([4, 8, 10, 23, 32, 42]);
  });
  it('should sort the reverse sorted array', () => {
    let arr = [20,18,12,5,5,-2];
    console.log(arr);
    expect(sort(arr)).toStrictEqual([-2,5,5,12,18,20]);
  });
  it('should sort the few uniques array', () => {
    let arr = [5,12,7,5,5,7];
    console.log(arr);
    expect(sort(arr)).toStrictEqual([5,5,5,7,7,12]);
  });
});
