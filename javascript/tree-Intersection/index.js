const Node = require('./Node');
const BinaryTree = require("./BinaryTree");
const TreeIntersection = require("./tree-Intersection");

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

let tree = new BinaryTree(one);

let one2 = new Node(47);
let two2 = new Node(2);
let three2 = new Node(3);
let four2 = new Node(56);
let five2 = new Node(5);
let six2 = new Node(6);
let seven2 = new Node(74);
let eight2 = new Node(8);
let nine2 = new Node(98);

one2.left = two2;
one2.right = three2;
two2.left = six2;
six2.right = seven2;
seven2.left = eight2;
seven2.right = nine2;
three2.left = four2;
three2.right = five2;

let tree2 = new BinaryTree(one2);

let treeOne = tree.PreOrder();
let treeTwo = tree2.PreOrder();

// console.log('tree', tree)
// console.log('tree2', tree2)

console.log('treeOne :>> ', treeOne);
console.log('treeTwo :>> ', treeTwo);

console.log('Result :>>', TreeIntersection(treeOne, treeTwo));