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
}

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

