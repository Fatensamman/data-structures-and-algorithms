'use strict';

const HashTable = require('../hashtable/hashtable.js');

const p = '';


let repeatedWord = (paragraph) => {
  const table = new HashTable(10);
  const matches = paragraph.match(/((\b[^\s]+\b)((?<=\.\w).)?)/g);
  // console.log('p3', matches);

  for (const match in matches) {
    let keyValue = matches[match].toLowerCase();
    if (table.contains(keyValue)) {
      // console.log('key', keyValue);
      return table.get(keyValue);
    }

    table.add(keyValue, keyValue);
    // console.log('table', table)
  }
};

console.log(repeatedWord(p));
module.exports = repeatedWord;