'use strict';

function breadthFirst(tree) {
  let front = [tree.root];
  let result = [];
  while (front.length) {
    let current = front.shift();
    result.push(current.value);
    if (current.left) {
      front.push(current.left);
    }
    if (current.right) {
      front.push(current.right);
    }
  }
  return result;
}

module.exports = breadthFirst;