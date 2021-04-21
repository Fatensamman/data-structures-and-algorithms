'use strict';



const { fizzBuzzTree, Node, KaryTree } = require('../fizzBuzzTree.js');

describe('Binary Tree', () => {
    let tree;
    const one = new Node(1, 3);
    const two = new Node(2, 3);
    const three = new Node(3, 3);
    const four = new Node(4, 3);
    const five = new Node(5, 3);
    const six = new Node(6, 3);
    const seven = new Node(7, 3);
    const eight = new Node(8, 3);
    const nine = new Node(9, 3);
    const ten = new Node(10, 3);
    const elev = new Node(11, 3);
    const twel = new Node(12, 3);
    const thirteen = new Node(13, 3);
    const fourteen = new Node(14, 3);
    const fifteen = new Node(15, 3);

    one.children[0] = two;
    one.children[1] = three;
    one.children[2] = four;
    two.children[0] = five;
    two.children[1] = six;
    two.children[2] = seven;
    three.children[0] = eight;
    three.children[1] = nine;
    four.children[0] = ten;
    four.children[1] = elev;
    four.children[2] = twel;
    five.children[0] = thirteen;
    five.children[1] = fourteen;
    five.children[2] = fifteen;
    it('return an exception if the input tree in empty', () => {
        tree = new KaryTree(3);
        expect(fizzBuzzTree(tree)).toBe('Empty Tree!');
    });
    it('return a new tree with modified values', () => {
        tree.root = one;
        let except = fizzBuzzTree(tree).root.children[1].value;
        let except1= fizzBuzzTree(tree).root.children[0].children[0].value;
        let except2= fizzBuzzTree(tree).root.children[0].children[0].children[2].value;
        expect(except).toEqual('Fizz');
        expect(except1).toEqual('Buzz');
        expect(except2).toEqual('FizzBuzz');
    });
});