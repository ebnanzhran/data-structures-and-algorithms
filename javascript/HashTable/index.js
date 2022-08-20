const HashTable = require("./hashTable");

const hashTable = new HashTable(10);

hashTable.set('Esam', '401d15 student');
hashTable.set('Ahmad', '401d15 student');
hashTable.set('Mohamad', '401d15 student');
hashTable.set('Samah', '401d15 student');
hashTable.set('Laith', '401d15 student');
hashTable.set('Shihab', '401d15 student');

console.log('get :>>', hashTable.get('Esam'));
console.log('get :>>', hashTable.get('Ahmad'));
console.log('get :>>', hashTable.get('Mohamad'));
console.log('get :>>', hashTable.get('Samah'));
console.log('get :>>', hashTable.get('Laith'));
console.log('get :>>', hashTable.get('Shihab'));

console.log(' >>>>>>>><<<<<<<<< ');

console.log('contains :>>', hashTable.contains('Esam'));
console.log('contains :>>', hashTable.contains('Ahmad'));
console.log('contains :>>', hashTable.contains('Mohamad'));
console.log('contains :>>', hashTable.contains('Samah'));
console.log('contains :>>', hashTable.contains('Laith'));
console.log('contains :>>', hashTable.contains('Shihab'));

console.log(' >>>>>>>><<<<<<<<< ');

console.log('keys :>>', hashTable.keys());