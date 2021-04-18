'use strict';
const { Node, BinaryTree, BinarySearchTree } = require('../tree.js');

describe('Binary Search Tree', () => {
    it('Can successfully instantiate an empty tree', () => {
        const emptyTree = new BinarySearchTree();
        expect(emptyTree.root).toBeNull();
    });
    it('Can successfully instantiate a tree with a single root node', () => {
        const tree = new BinarySearchTree();
        tree.add(3);
        expect(tree.root.value).toEqual(3);
    });
    it('Can successfully add a left child and right child to a single root node', () => {
        const newTree = new BinarySearchTree();
        newTree.add(7);
        newTree.add(3);
        newTree.add(10);
        expect(newTree.root.left.value).toEqual(3);
        expect(newTree.root.right.value).toEqual(10);
    });

});

describe('Binary tree', () => {
    let tree;
    beforeAll(() => {
        const one = new Node('z');
        const two = new Node('y');
        const three = new Node('x');
        const four = new Node('w');
        const five = new Node('v');
        const six = new Node('u');
        const seven = new Node('t');
        const eight = new Node('s');
        one.left = two;
        one.right = three;
        two.left = four;
        two.right = five;
        five.left = eight;
        three.left = six;
        three.right = seven;
        tree = new BinaryTree(one);
    });
    it('preOrder', () => {
        const expected = ['z', 'y', 'w', 'v', 's', 'x', 'u', 't'];
        const preOrder = tree.preOrder();
        expect(preOrder).toEqual(expected);
    });
    it('inOrder', () => {
        const expected = ['w', 'y', 's', 'v', 'z', 'u', 'x', 't'];
        const inOrder = tree.inOrder();
        expect(inOrder).toEqual(expected);
    });
    it('postOrder', () => {
        const expected = ['w', 's', 'v', 'y', 'u', 't', 'x', 'z'];
        const postOrder = tree.postOrder();
        expect(postOrder).toEqual(expected);
    });
    it('postOrder', () => {
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
        const expected = 8;
        const findMax = tree.findMax();
        expect(findMax).toEqual(expected);
    });
    it('sholud return expetion when the tree is empty',()=>{
        let newTree = new BinaryTree();
        let findMax = newTree.findMax()
        expect(findMax).toEqual('exception');
    })
});
