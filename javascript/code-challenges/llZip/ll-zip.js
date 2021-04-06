'use strict';

const Linkedlist = require('../linked-lists/linked-list.js');
const Node = require('../linked-lists/node.js');

function zipLists (ll1,ll2){
  const ll3 = new Linkedlist();
  let firstNode = ll1.head;
  let secondNode = ll2.head;
  while(firstNode || secondNode){
    if(firstNode ){
      ll3.append(firstNode.amount);
      firstNode=firstNode.next;
    }
    if(secondNode){
      ll3.append(secondNode.amount);
      secondNode=secondNode.next;
    }
  }
  let str = ll3.toString();
  return str;
}

module.exports = zipLists ;
