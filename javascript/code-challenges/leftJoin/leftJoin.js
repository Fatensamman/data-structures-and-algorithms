'use strict';


function leftJoin(left, right) {
  let leftArray = left.table.filter(item => item !== undefined).flat();
  let rightArray = right.table.filter(item => item !== undefined).flat();
  let rightKeys = [];
  for (let j = 0; j < rightArray.length; j++) {
    let temp = rightArray[j];
    rightKeys.push(temp[0]);
  }
  rightArray = rightArray.flat();
  let finalArr = [];
  for (let i = 0; i < leftArray.length; i++) {
    let temp = leftArray[i];
    finalArr.push(temp);
    if (rightKeys.includes(temp[0])) {
      finalArr[i].push(rightArray[rightArray.indexOf(temp[0]) + 1]);

    }
    else {
      finalArr[i].push(null);
    }
  }
  return finalArr;


}
module.exports = leftJoin;



