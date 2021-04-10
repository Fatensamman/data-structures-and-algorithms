'use strict';

const { Stack, Queue } = require('../stack-and-queue.js');


describe('stack tests', () => {
  it('1 It should push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.amount).toEqual(1);

  });
  it('2 It should push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(5);
    expect(stack.top.amount).toEqual(5);
    expect(stack.size).toEqual(2);
  });
  it('3 It should pop off the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(5);
    let pop = stack.pop();
    expect(pop).toEqual(5);
    expect(stack.size).toEqual(1);
  });
  it('4 It should empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(5);
    let pop = stack.pop();
    let pop2 = stack.pop();
    expect(pop).toEqual(5);
    expect(pop2).toEqual(1);
    expect(stack.size).toEqual(0);
  });
  it('5 It should peek the top item on the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(5);
    expect(stack.peek()).toEqual(5);
  });
  it('6 It should instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack.size).toEqual(0);
  });
  it('7 It should  raises exception when Calling pop or peek on empty stack', () => {
    let stack = new Stack();

    expect(stack.pop()).toEqual('exception');
    expect(stack.peek()).toEqual('exception');
  });
});



describe('queue tests', () => {
  it(' 1 It should enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.amount).toEqual(1);

  });
  it(' 2 It should enqueue multiple values onto a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(5);
    expect(queue.front.amount).toEqual(1);
    expect(queue.size).toEqual(2);
  });
  it('3 It should dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(5);
    let dequeue = queue.dequeue();
    expect(dequeue).toEqual(1);
    expect(queue.size).toEqual(1);
  });
  it('4 It should empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(5);
    let dequeue = queue.dequeue();
    let dequeue2 = queue.dequeue();
    expect(dequeue).toEqual(1);
    expect(dequeue2).toEqual(5);
    expect(queue.size).toEqual(0);
  });
  it('5 It should peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(5);
    expect(queue.peek()).toEqual(1);
  });
  it('6 It should instantiate an empty Queue', () => {
    let queue = new Queue();
    expect(queue.size).toEqual(0);
  });
  it('7 It should  raises exception when Calling dequeue or peek on empty Queue', () => {
    let queue = new Queue();

    expect(queue.dequeue()).toEqual('exception');
    expect(queue.peek()).toEqual('exception');
  });
});
