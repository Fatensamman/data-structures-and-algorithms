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
  toString() {
    let current = this.head;
    let output = [];
    while (current) {
      output.push(`{ ${current.amount} }`);
      current = current.next;
    }
    output.push(`NULL/`);
    return output.join(' -> ');
    // `{ a } -> { b } -> { c } -> NULL/
  }


  append(value) {
    let node = new Node(value);
    let thisOne = this.head;
    if (!thisOne) {
      thisOne = node;
    } else {
      while (thisOne.next) {
        thisOne = thisOne.next;
      }
      thisOne.next = node;
    }
    this.size++;
  }

  insertBefore(value, newVal) {
    if (this.size > 0) {
      if (value === this.head.amount) {
        this.insert(newVal);
        return;
      }else{
        let node = new Node(newVal);
        let current = this.head;
        let previous;
        while (value !== current.amount) {
          previous= current;
          current = current.next;
        }
        node.next = current;
        previous.next= node;
      }
      this.size++;

    }else return;
  }
  insertAfter(value, newVal) {
    if (this.size > 0) {
      let node = new Node(newVal);
      let current = this.head.next;
      let previous=this.head;
      while (value !== previous.amount) {
        previous= current;
        current = previous.next;
      }
      // node.next=value;
      node.next = current;
      previous.next= node;
      this.size++;
    }else return;
  }
  kthFromEnd(k){
    let current = this.head;
    let count = this.size-1;
    while(current){
      if(count===k){
        return current.amount;
      }
      count--;
      current=current.next;
    }
    return 'exception!';
  }
};
