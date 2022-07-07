'use strict';

const BreadthFirst = require('../tree-breadth/breadth');
const BinaryTree = require('../tree-breadth/binary');

describe('Breadth Test', () => {
  test('Can create a binary tree', () => {
    const tree = new BinaryTree();
    expect(tree).toBeInstanceOf(BinaryTree);
  });

  test('Can add a value to a binary tree', () => {
    const tree = new BinaryTree();
    tree.Add(1);
    expect(tree.root.value).toBe(1);
  });

  test('Can use breadth first to traverse a binary tree', () => {
    const tree = new BinaryTree();
    tree.Add(1);
    tree.Add(2);
    tree.Add(3);
    tree.Add(4);
    tree.Add(5);
    tree.Add(6);
    tree.Add(7);
    tree.Add(8);
    expect(BreadthFirst(tree)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});