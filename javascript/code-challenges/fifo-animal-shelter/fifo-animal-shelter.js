'use strict';

let { Stack } = require('../stack-and-queue/stack-and-queue.js');

class AnimalShelter {
  constructor() {
    this.dogs = new Stack();
    this.cats = new Stack();
  }
  enqueue(animal) {
    if (typeof animal === 'object' && animal.type === 'dog') {
      this.dogs.push(animal);
    } else if (typeof animal === 'object' && animal.type === 'cat') {
      this.cats.push(animal);
    } else {
      return 'this shelter only for dogs and cats';
    }
  }
  dequeue(pref) {
    if (this.cats.isEmpty()) {
      while (!this.dogs.isEmpty()) {
        this.cats.push(this.dogs.pop());
      }
    }
    if (pref === 'dog'){
      this.dogs.pop();
    } else if (pref === 'cat') {
      this.cats.pop();
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;


