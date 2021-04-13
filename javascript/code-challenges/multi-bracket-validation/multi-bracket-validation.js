'use strict';

function multiBracketValidation(input) {
  if (input === '') {
    return 'please insert a valid string';
  }
  let curlyBracket = 0;
  let squareBracket = 0;
  let bracket = 0;
  let all = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') { bracket++; all++; }
    if (input[i] === ')') { bracket--; all++; }
    if (input[i] === '{') { curlyBracket++; all++; }
    if (input[i] === '}') { curlyBracket--; all++; }
    if (input[i] === '[') { squareBracket++; all++; }
    if (input[i] === ']') { squareBracket--; all++; }

    // console.log(curlyBracket,squareBracket,bracket);
  }
  if(all>0){
    if (curlyBracket + squareBracket + bracket === 0) {
      return true;
    }
  } else return false;
}
// console.log(multiBracketValidation('({})'));
module.exports = multiBracketValidation;
