'use strict';

class HashTable {
  constructor(size = 50) {
    this.table = new Array(size);
  }

  add(key, value) {
    let hash = this.hash(key);
    //if contains a key, do nothing

    if (!this.table[hash]) {
      this.table[hash] = [[key, value]];
    } else {

      this.table[hash].push([key, value]);
    }

  }

  hash(key) {
    let hash = 353;
    for (let i = 0; i < key.length; i++) {
      // console.log(hash);
      hash = hash * 599 * key.charCodeAt(i) % this.table.length;
    }

    return hash;
  }

  get(key) {
    const hash = this.hash(key);
    const itemsInBucket = this.table[hash];
    if (itemsInBucket === undefined) {
      console.log('lllllllllllllllllllllll')
      return null;
    }
    else {

      for (let i = 0; i < itemsInBucket.length; i++) {
        if (itemsInBucket[i][0] === key) {
          return itemsInBucket[i][1];
        }

      }
    }
  }
  contains(key) {
    if (this.get(key) === undefined) {
      return false;
    }
    else {
      return true;
    }
  }
}


const hashTable = new HashTable();
hashTable.add('firstName', 'Ahmad');
hashTable.add('secondName', 'Moh');
hashTable.add('thirddName', 'heba');
hashTable.add('fourthdName', 'faten');
hashTable.add('family', 'Test');


// console.log('table is :',hashTable.table);
// console.log(hashTable.get('tame'));
// console.log(hashTable.get('firstName'));
// console.log(hashTable.hash('firstName'));
// console.log(hashTable.contains('firstName'));

module.exports = HashTable;
