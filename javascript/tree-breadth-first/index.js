'use strict';

const breadthFirst = require('./tree-breadth/breadth');
const BinaryTree = require('./tree-breadth/binary');


let tree = new BinaryTree();

tree.Add(10);
tree.Add(25);
tree.Add(52);
tree.Add(4);
tree.Add(36);
tree.Add(87);
tree.Add(8);
tree.Add(9);
tree.Add(12);   

console.log(breadthFirst(tree));