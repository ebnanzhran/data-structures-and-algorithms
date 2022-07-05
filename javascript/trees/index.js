'use strict';

const Node = require('./node');
const { BinaryTree, BinaryTreeSearch } = require('./binary');

let tree = null;

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

tree = new BinaryTree(one);

let preOrder = tree.PreOrder();
console.log('pre order: ', preOrder);


let inOrder = tree.InOrder();
console.log('in order: ', inOrder);



let postOrder = tree.PostOrder();
console.log('post order: ', postOrder);


let BTS = new BinaryTreeSearch();

BTS.Add(8);
BTS.Add(13);
BTS.Add(5);
BTS.Add(80);
BTS.Add(53);
BTS.Add(6);
BTS.Add(100);


console.log('*******************************');
console.log(tree.Max());
console.log(BTS.Max());
console.log('*******************************');