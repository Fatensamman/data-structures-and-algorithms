'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder() {
    const result = [];
    const _traverse = (node) => {
      result.push(node.value);
      if (node.left) {
        _traverse(node.left);
      }
      if (node.right) {
        _traverse(node.right);
      }
    };
    _traverse(this.root);
    return result;
  }
  inOrder() {
    const result = [];
    const _traverse = (node) => {
      if (node.left) {
        _traverse(node.left);
      }
      result.push(node.value);
      if (node.right) {
        _traverse(node.right);
      }
    };
    _traverse(this.root);
    return result;
  }
  postOrder() {
    const result = [];
    const _traverse = (node) => {
      if (node.left) {
        _traverse(node.left);
      }
      if (node.right) {
        _traverse(node.right);
      }
      result.push(node.value);
    };
    _traverse(this.root);
    return result;
  }
  findMax() {
    if (!this.root) {
      return 'exception';
    } else {
      let arrResult = this.postOrder();
      let max = 0;
      for (let i = 0; i < arrResult.length; i++) {
        if (arrResult[i] > max) {
          max = arrResult[i];
        }
      }
      return max;
    }
  }
  breadthFirstLTR() {
    var node = this.root;
    var tree = [node];
    var result = [];
    while (tree.length) {
      node = tree.shift();
      result.push(node.value);
      if (node.left) tree.push(node.left);
      if (node.right) tree.push(node.right);
    }
    return result;
  }

}
function breadthFirstLR(v) {
  var node = v.root;
  var tree = [node];
  var result = 0;
  while (tree.length) {
    node = tree.shift();
    if (node.value % 2) {
      result += node.value;
    }
    if (node.left) tree.push(node.left);
    if (node.right) tree.push(node.right);
  }
  return result;
}
function compareByLeaf(tree, tree2) {
  let sum = 0;
  function leafCount(node) {
    if (!node) return 0;
    if (!node.left && !node.right) return 1;
    sum = leafCount(node.left) + leafCount(node.right);
    return sum;
  }
  if (leafCount(tree.root) !== leafCount(tree2.root)) {
    return false;
  } else return true;
}
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);
const eight = new Node(8);
one.left = two;
one.right = three;
two.left = four;
two.right = five;
five.left = eight;
three.left = six;
three.right = seven;
let tree = new BinaryTree(one);
let tree2 = new BinaryTree(two);
// console.log(breadthFirstLR(tree));



class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
  add(value) {
    var newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }

    } else if (!node.right) {
      node.right = newNode;
    } else {
      this.insertNode(node.right, newNode);
    }
  }
  contains(value) {
    if (this.root === null) {
      return 'Empty Tree!';
    }
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else return true;
    }
    return false;
  }

}

module.exports = {
  Node: Node,
  BinaryTree: BinaryTree,
  BinarySearchTree: BinarySearchTree
};

