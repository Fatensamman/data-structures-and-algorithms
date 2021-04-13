'use strict';

const multiBracketValidation = require('../multi-bracket-validation.js');

describe('balanced brackets', () => {
  it(' 1 It should return true if the brackets is balanced and false if its not balanced in the string', () => {
    let str = '(hello)[{here I am this is me}]';
    let str2= '(hello)[{here I am this is me';
    let test1 =multiBracketValidation(str);
    let test2 =multiBracketValidation(str2);
    expect(test1).toBeTruthy();
    expect(test2).toBeFalsy();
  });
  it(' 1 It should return false if the string doesnt contain brackets', () => {
    let str = 'hello here I am this is me';
    let test1 =multiBracketValidation(str);
    expect(test1).toBeFalsy();
  });
  it(' 1 It should test if the string is empty', () => {
    let str = '';
    let test1 =multiBracketValidation(str);
    expect(test1).toEqual('please insert a valid string');
  });
});
