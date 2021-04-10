'use strict';

class Node {
  constructor(amount, next = null) {
    this.amount = amount;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(value) {
    this.top = new Node(value, this.top);
    this.size++;
  }
  pop() {
    if (!this.top) {
      return 'exception';
    }
    let current = this.top;
    this.top = current.next;
    this.size--;
    return current.amount;
  }
  peek() {
    if (!this.top) {
      return 'exception';
    }
    return this.top.amount;
  }
  isEmpty() {
    if (!this.top) {
      return true;
    } else return false;
  }
}
// let n = new Stack();
// n.push(1);
// n.push(2);
// n.push(3);
// // console.log(n.top);
// // n.pop();
// // console.log(n.top);
// n.pop();
// console.log(n.isEmpty());

class Queue {
  constructor() {
    this.front = null;
    this.size = 0;
  }
  enqueue(value) {
    if (!this.front) {
      this.front = new Node(value);
      this.size++;
    } else {
      let current = this.front;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
      this.size++;
    }
  }
  dequeue() {
    if (!this.front) {
      return 'exception';
    }
    let current = this.front;
    this.front = current.next;
    this.size--;
    return current.amount;
  }
  peek() {
    if (!this.front) {
      return 'exception';
    }
    return this.front.amount;
  }
  isEmpty() {
    if (!this.front) {
      return true;
    } else return false;
  }
}
module.exports = {
  Stack: Stack,
  Queue: Queue
};
// let n = new Queue();
// n.enqueue(1);
// n.enqueue(5);
// n.dequeue();
// console.log(n.isEmpty());


