'use strict';
let Node = require('./node.js');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert(amount) {
    this.head = new Node(amount, this.head);
    this.size++;
  }
  includes(amount) {
    if (this.size > 0) {
      let current = this.head;
      while (current) {
        if (amount === current.amount) {
          return true;
        } else {
          current = current.next;
        }
      }
      return false;
    }
    return null;
  }
  toString(){
    let current= this.head;
    let output=[];
    while(current){
      output.push(`{ ${current.amount} }`);
      current=current.next;
    }
    output.push(`NULL/`);
    return output.join(' -> ');
    // `{ a } -> { b } -> { c } -> NULL/
  }
};
