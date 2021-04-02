'use strict';
module.exports = class Node {
  constructor(amount, next = null) {
    this.amount = amount;
    this.next = next;
  }
};
