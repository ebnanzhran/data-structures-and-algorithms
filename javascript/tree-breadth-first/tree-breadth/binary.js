'use strict';

const Node = require('./node');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  Add(value) {
    let current = this.root;
    if (!current) {
      this.root = new Node(value);
    }
    else {
      while (current) {
        if (!current.left) {
          current.left = new Node(value);
          break;
        }
        current = current.left;
        if (!current.right) {
          current.right = new Node(value);
          break;
        }
        current = current.right;
      }
    }
  }
}

module.exports = BinaryTree;