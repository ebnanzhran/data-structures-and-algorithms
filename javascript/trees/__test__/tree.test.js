'use strict';

const { BinaryTree, BinaryTreeSearch } = require('../binary');
const Node = require('../node');

let tree = null;

describe('Binary Test', () => {
  beforeAll(() => {
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
  });

  test('constructor', () => {
    const newTree = new BinaryTree();
    expect(newTree.root).toBeNull();
    expect(tree.root.value).toEqual(1);
  });

  test('preOrder', () => {
    const preOrder = tree.PreOrder();
    expect(preOrder).toEqual([1, 2, 6, 7, 8, 9, 3, 4, 5]);
  });

  test('inOrder', () => {
    const inOrder = tree.InOrder();
    expect(inOrder).toEqual([6, 8, 7, 9, 2, 1, 4, 3, 5]);
  });

  test('postOrder', () => {
    const postOrder = tree.PostOrder();
    expect(postOrder).toEqual([8, 9, 7, 6, 2, 4, 5, 3, 1]);
  });

  test('Binary Search', () => {
    const BTS = new BinaryTreeSearch();
    BTS.Add(10);
    BTS.Add(11);
    BTS.Add(5);
    BTS.Add(13);
    BTS.Add(13);
    BTS.Add(6);
    BTS.Add(15);
    expect(BTS.Contains(6)).toBeTruthy();
    expect(BTS.Contains(15)).toBeTruthy();
    expect(BTS.Contains(20)).toBeFalsy();
  });

  test('Can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });

  test('Can successfully instantiate a tree with a single root node', () => {
    const newTree = new BinaryTree();
    expect(tree.root.value).toEqual(1);
  });

  test('Can successfully add a left child and right child to a tree', () => {
    const BTS = new BinaryTreeSearch();
    BTS.Add(10);
    BTS.Add(11);
    BTS.Add(5);

    expect(BTS.root.value).toEqual(10);
    expect(BTS.root.left.value).toEqual(5);
    expect(BTS.root.right.value).toEqual(11);
  });

  test('Can return the max value in a tree', () => {
    const BTS = new BinaryTreeSearch();
    BTS.Add(10);
    BTS.Add(11);
    BTS.Add(5);
    BTS.Add(12);
    BTS.Add(13);
    BTS.Add(6);
    BTS.Add(15);
    expect(BTS.Max()).toEqual(15);
  });
});