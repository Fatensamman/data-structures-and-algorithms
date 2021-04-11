'use strict';

let { Stack } = require('../stack-and-queue/stack-and-queue.js')

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  enqueue(value) {
    this.stack1.push(value);
  }
  dequeue() {
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}
module.exports = PseudoQueue;
// let n = new PseudoQueue();
// n.enqueue(1);
// // n.enqueue(2);
// n.enqueue(3);
// n.dequeue();
// console.log(n);


