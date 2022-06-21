'use strict';

const Queue = require('./lib/queue');

const newQueue = new Queue();

newQueue.enqueue("bnan");
newQueue.enqueue("fuad");
newQueue.enqueue("zhran");
console.log(newQueue.peek());
newQueue.dequeue();
console.log(newQueue.peek());
newQueue.dequeue();
console.log(newQueue.peek());
newQueue.dequeue();
console.log(newQueue.peek());