'use strict';

const Node = require('../node.js');

describe('Class Node test',()=>{
  it('tests if the class is working',()=>{
    let amount = 100;
    let newNode = new Node(amount);
    expect(newNode.amount).toEqual(amount);
    expect(newNode.next).toEqual(null);

  });
});
