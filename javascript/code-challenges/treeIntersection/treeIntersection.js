'use strict';
const {BinaryTree,Node} = require('../tree/tree.js');

let treeIntersection = (tree1, tree2) => {
  const final = [];
  const tree1Arr = tree1.preOrder();
  const tree2Arr = tree2.preOrder();
  // console.log(tree1.preOrder(),tree2.preOrder());

  for (let i = 0; i < tree1Arr.length; i++) {
    if (tree1Arr[i] === tree2Arr[i]){
      final.push(tree1Arr[i]);
      // console.log('final',final);
    }else continue;
  }

  return final;
};

module.exports = treeIntersection;

let one = new Node(11);
let two = new Node(2);
let three = new Node(3);
let four = new Node(40);
let five = new Node(55);
let six = new Node(6);
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
six = new Node(60);
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
// console.log(treeIntersection(tree1, tree2));
