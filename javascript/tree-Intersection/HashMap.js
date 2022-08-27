const LinkedList = require("./LinkedList");

class HashMap {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    let index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = new LinkedList();
    }
    this.table[index].append({
      [key]: value
    });
  }
  contains(key) {
    const hash = this.hash(key);
    if (this.table[hash]) {
      let currentNode = this.table[hash].head;
      while (currentNode) {
        if (currentNode.value[key]) {
          return true;
        }
        currentNode = currentNode.next;
      }
    } else {
      return false;
    }
  }
}

module.exports = HashMap;