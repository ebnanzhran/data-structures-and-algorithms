'use strict';

const Stack = require('./lib/stack');

const newStack = new Stack();

newStack.push("bnan");
newStack.push("fuad");
newStack.push("zhran");
console.log(newStack.peek());
newStack.pop();
console.log(newStack.peek());
newStack.pop();
console.log(newStack.peek());
newStack.pop();
console.log(newStack.peek());