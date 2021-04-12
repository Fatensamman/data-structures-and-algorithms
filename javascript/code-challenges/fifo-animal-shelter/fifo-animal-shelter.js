'use strict';

class Node {
  constructor(data, next = null) {
    this.type = data;
    this.next = next;
  }
}
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
    return current.data;
  }
}
class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
  }
  enqueue(animal) {
    if (typeof animal === 'object' && animal.type === 'dog') {
      this.dogs.enqueue(animal);
    } else if (typeof animal === 'object' && animal.type === 'cat') {
      this.cats.enqueue(animal);
    } else {
      return 'this shelter only for dogs and cats';
    }
  }
  dequeue(pref) {
    if (pref === 'dog'){
      this.dogs.dequeue();
    } else if (pref === 'cat') {
      this.cats.dequeue();
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;


