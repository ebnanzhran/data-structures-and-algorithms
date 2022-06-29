const Queue = require('./queue/queue');

const AnimalShelter=require ("./AnimalShelter");

let animalShilter=new AnimalShelter();
animalShilter.enqueue("cat");
animalShilter.enqueue("cat");
animalShilter.enqueue("cat");
animalShilter.enqueue("dog");
animalShilter.dequeue("cat");
animalShilter.dequeue("dog");

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