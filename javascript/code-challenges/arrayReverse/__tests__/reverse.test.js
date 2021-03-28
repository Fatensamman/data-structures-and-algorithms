'use strict';

const reverse = require('../array-reverse.js');

describe('Reverse', () => {
  it('It should reverse order of array', () => {
    expect(reverse([1,3,5,7,9,11,13,15,17,19])).toStrictEqual([19,17,15,13,11,9,7,5,3,1]);
  });
});
