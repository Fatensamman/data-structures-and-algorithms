'use strict';

const arrShift = require('../array-shift.js');

describe('Shift Array of Numbers', () => {
  it('It should add anew number on the middle of the array', () => {
    expect(arrShift([1,3,5,7,9,11,13,15,17,19],2)).toStrictEqual([1,3,5,7,9,2,11,13,15,17,19]);
    expect(arrShift([1,3,5,7,9,11,13,15,19],2)).toStrictEqual([1,3,5,7,9,2,11,13,15,19]);
  });
  it('It should return the same array if you dont add a num', () => {
    expect(arrShift([1,3,5,7,9,11,13,15,17,19])).toStrictEqual([1,3,5,7,9,11,13,15,17,19]);
  });
  it('It should return an array with given number if it is empty', () => {
    expect(arrShift([],2)).toStrictEqual([2]);
  });
});
