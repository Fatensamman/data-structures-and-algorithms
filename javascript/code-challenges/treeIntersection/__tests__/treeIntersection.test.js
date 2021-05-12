'use strict';

const treeIntersection = require('../treeIntersection.js');
const {BinaryTree,Node} = require('../../tree/tree.js');
let one = new Node(11);
let two = new Node(2);
let three = new Node(3);
let four = new Node(40);
let five = new Node(55);
let six = new Node(55);
let seven = new Node(700);
let eight = new Node(8);
one.left = two;
one.right = three;
two.left = four;
two.right = five;
five.left = eight;
three.left = six;
three.right = seven;
let tree1 = new BinaryTree(one);

one = new Node(11);
two = new Node(20);
three = new Node(30);
four = new Node(40);
five = new Node(55);
six = new Node(55);
seven = new Node(700);
eight = new Node(80);
one.left = two;
one.right = three;
two.left = four;
two.right = five;
five.left = eight;
three.left = six;
three.right = seven;
let tree2 = new BinaryTree(one);


describe('Testing tree intersection function', () => {
  it('Should return an array of all of the common values in two different binary trees', () => {
    const result = treeIntersection(tree1, tree2);

    expect(result).toEqual([11,40,55,55,700]);
  });
});
