'use strict';
module.exports = function reverseArray(numArr){
  let numArrReverese = [];
  for(let i =1 ; i<=numArr.length ; i++){
    numArrReverese.push(numArr[numArr.length -i]);
  }
  return numArrReverese;
};
