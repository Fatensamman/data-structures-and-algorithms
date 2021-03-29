'use strict';
module.exports = function insertShiftArray(numArr,num){
  if (num){
    let updatedArr = [];
    let half= Math.ceil(numArr.length/2);
    for(let i =0 ; i<half ; i++){
      updatedArr.push(numArr[i]);
    }
    updatedArr.push(num);
    for (let i= half; i < numArr.length; i++) {
      updatedArr.push(numArr[i]);
    }
    return updatedArr;
  } else return numArr;
};
