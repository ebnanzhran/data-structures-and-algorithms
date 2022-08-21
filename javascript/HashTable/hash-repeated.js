const HashTable = require("./hashTable");

function firstRepeatingWord(str) {
  //Write a function called repeated word that finds the first word to occur more than once in a string.
  //If there is no input, return No input.
  //If there are no words that occur more than once, return No repeated words.

  if (!str) {
    return "No input";
  }
  const hashTable = new HashTable(100);
  const words = str.split(" ");
  // console.log('words :>> ', words);
  for (let i = 0; i < words.length; i++) {
    if (hashTable.contains(words[i])) {
      return words[i];
    } else {
      hashTable.set(words[i], words[i]);
    }
  }
  return "No repeated words";
}

module.exports = firstRepeatingWord;