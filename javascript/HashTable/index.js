const HashTable = require("./hashTable");
const firstRepeatingWord = require("./hash-repeated");

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

let s = "Once upon a time, there was a brave princess who...";

let s1 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

let s2 = "It was a queer, sultry summer , the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";

console.log('s :>> ', firstRepeatingWord(s));
console.log('s1 :>> ', firstRepeatingWord(s1));
console.log('s2 :>> ', firstRepeatingWord(s2));