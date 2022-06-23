const Queue = require('./queue/queue');

const newQueue = new Queue();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);
newQueue.enqueue(5);

console.log('dequeue', newQueue.dequeue());
console.log('dequeue', newQueue.dequeue());
console.log('dequeue', newQueue.dequeue());
console.log('dequeue', newQueue.dequeue());
console.log('dequeue', newQueue.dequeue());
console.log('dequeue', newQueue.dequeue());