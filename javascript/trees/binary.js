'use strict';

const Node = require('./node');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  PreOrder() {
    let result = [];
    let traverse = (node) => {
      result.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  InOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      result.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  PostOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      result.push(node.value);
    }
    traverse(this.root);
    return result;
  }
  
  Max() {
    let max = 0;
    let traverse = (node) => {
      if (node.value > max) {
        max = node.value;
      }
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return max;
  }
}

class BinaryTreeSearch extends BinaryTree {
  constructor(root = null) {
    super(root);
  }

  Add(value) {
    let current = this.root;
    if (!current) {
      this.root = new Node(value);
    }
    else {
      while (current) {
        if (value < current.value) {
          if (!current.left) {
            current.left = new Node(value);
            break;
          }
          current = current.left;
        }
        else {
          if (!current.right) {
            current.right = new Node(value);
            break;
          }
          current = current.right;
        }
      }
    }
  }

  Contains(value) {
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

module.exports = { BinaryTreeSearch, BinaryTree };