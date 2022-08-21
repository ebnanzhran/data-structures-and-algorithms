const HashTable = require('../hashTable');
const firstRepeatingWord = require('../hash-repeated');

const hashTable = new HashTable(10);

describe('Hash Table Test', () => {
  it('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    hashTable.set('hello', 'world');
    expect(hashTable.get('hello')).toEqual([{ hello: 'world' }]);
  });
  it('Retrieving based on a key returns the value stored', () => {
    hashTable.set('bahaa', '401d15 student');
    expect(hashTable.get('bahaa')).toEqual([{ bahaa: '401d15 student' }]);
  });
  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(hashTable.get('bsdbfi')).toEqual(null);
  });
  it('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    hashTable.set('malek', '401d15 student');
    hashTable.set('emad', '401d15 student');
    console.log('keys :>> ', hashTable.keys());
    expect(hashTable.keys()).toEqual([[["emad"]], [["bahaa"]], [["hello"], ["malek"]]]);
  });
  it('Successfully handle a collision within the hashtable', () => {
    hashTable.set('Esam', '401d15 student');
    hashTable.set('Samah', '401d15 student');
    expect(hashTable.get('Esam')).toEqual([{ Esam: '401d15 student' }, { Samah: '401d15 student' }]);
  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    hashTable.set('Ahmad', '401d15 student');
    hashTable.set('Mohamad', '401d15 student');
    hashTable.set('Laith', '401d15 student');
    hashTable.set('Shihab', '401d15 student');
    expect(hashTable.get('Ahmad')).toEqual([{ Ahmad: '401d15 student' }, { Mohamad: '401d15 student' }]);
  });
  it('Successfully hash a key to an in-range value', () => {
    hashTable.set('hello', 'world');
    expect(hashTable.hash('hello')).toBeLessThan(10);
  });
  it('Successfully return the first repeated word from a string', () => {
    let s = "Once upon a time, there was a brave princess who...";
    expect(firstRepeatingWord(s)).toEqual('a');
    let s1 = 'It was the best of times, it was the worst of times'
    expect(firstRepeatingWord(s1)).toEqual('it');
    let s2 = "It was a queer, sultry summer , the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."
    expect(firstRepeatingWord(s2)).toEqual('summer');
  });
})