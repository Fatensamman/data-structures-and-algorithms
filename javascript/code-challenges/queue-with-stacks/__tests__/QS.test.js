'use strict';

const PseudoQueue = require('../queue-with-stacks.js');

describe('PseudoQueue tests', () => {
  it(' 1 It should enqueue into a PseudoQueue', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    expect(queue.stack1.top.amount).toEqual(1);

  });
  it(' 2 It should enqueue multiple values onto a queue', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(5);
    expect(queue.stack1.top.amount).toEqual(5);
    expect(queue.stack1.size).toEqual(2);
  });
  it('3 It should dequeue out of a queue the expected value', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(5);
    let dequeue = queue.dequeue();
    expect(dequeue).toEqual(1);
  });
  it('4 It should empty a queue after multiple dequeues', () => {
    let queue = new PseudoQueue();
    queue.enqueue(1);
    queue.enqueue(5);
    let dequeue = queue.dequeue();
    let dequeue2 = queue.dequeue();
    expect(dequeue).toEqual(1);
    expect(dequeue2).toEqual(5);
    expect(queue.stack1.size + queue.stack2.size).toEqual(0);
  });

  it('5 It should instantiate an empty Queue', () => {
    let queue = new PseudoQueue();
    expect(queue.stack1.size + queue.stack2.size).toEqual(0);
  });
  it('6 It should  raises exception when Calling dequeue or peek on empty Queue', () => {
    let queue = new PseudoQueue();
    expect(queue.dequeue()).toEqual('exception');
  });
  it('7 It Should return “undefined” Expected failure for enqueue', () => {
    let queue = new PseudoQueue();
    expect(queue.enqueue()).toEqual(undefined);
  });
});
