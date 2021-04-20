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
    let treeNum;
    beforeAll(() => {
        const z = new Node('z');
        const y = new Node('y');
        const x = new Node('x');
        const w = new Node('w');
        const v = new Node('v');
        const u = new Node('u');
        const t = new Node('t');
        const s = new Node('s');
        z.left = y;
        z.right = x;
        y.left = w;
        y.right = v;
        v.left = s;
        x.left = u;
        x.right = t;
        tree = new BinaryTree(z);
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
        treeNum = new BinaryTree(one);
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
        const expected = 8;
        const findMax = treeNum.findMax();
        expect(findMax).toEqual(expected);
    });
    it('sholud return expetion when the tree is empty',()=>{
        let newTree = new BinaryTree();
        let findMax = newTree.findMax()
        expect(findMax).toEqual('exception');
    });
    it('sholud return Breadth-first Traversal array',()=>{
        let fBreadth = treeNum.breadthFirstLTR();
        expect(fBreadth).toEqual([1,2,3,4,5,6,7,8]);
    })
});
