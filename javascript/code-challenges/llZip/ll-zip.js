'use strict';

const Linkedlist = require('../linked-lists/linked-list.js');
const Node = require('../linked-lists/node.js');

const ll1 = new Linkedlist();
ll1.insert(44);
ll1.insert(88);
let ll2= new Linkedlist();
ll2.insert(11);
ll2.insert(55);
ll2.insert(110);
ll2.insert(120);
ll2.insert(130);
ll2.insert(150);
console.log(ll2.toString());
reverse(ll2);
console.log(ll2.toString());



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

// console.log((ll1.toString(),ll2.toString()));

module.exports = zipLists ;

