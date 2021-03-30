'use strict';

const binary = require('../array-binary.js');

describe('binary search', () => {
  it('It should return index of the given number if exists', () => {
    expect(binary([1,3,5,7,9,11,13,15,17,19],7)).toStrictEqual(3);
    expect(binary([1,3,5,7,9,11,13,15,17,19],11)).toStrictEqual(5);
    expect(binary([1,3,5,7,9,11,13,15,17,19],19)).toStrictEqual(9);
  });
  it('It should return -1 if the numer doesnt exist', () => {
    expect(binary([1,3,5,7,9,11,13,15,17,19],4)).toStrictEqual(-1);
  });
  it('It should return -1 if the array is empty', () => {
    expect(binary([])).toStrictEqual(-1);
  });
});
