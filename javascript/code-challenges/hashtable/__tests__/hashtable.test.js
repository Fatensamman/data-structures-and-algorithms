'use strict';
const HashTable = require('../hashtable.js');

describe('hashtable tests', () => {
    it('Can Adding a key/value to hashtable', () => {
        const hashTable = new HashTable();
        hashTable.add('firstName', 'Ahmad');
        expect(hashTable.get('firstName')).toEqual('Ahmad');
    });
    it('Can Retrieving based on a key returns the value stored', () => {
        const hashTable = new HashTable();
        hashTable.add('Name', 'Amal');
        expect(hashTable.get('Name')).toEqual('Amal');
    });
    it('Can Successfully returns null for a key that does not exist in the hashtable', () => {
        const hashTable = new HashTable();
        hashTable.add('Name', 'Amal');
        expect(hashTable.get('year')).toBeNull();
    });
    it('Can Successfully handle a collision within the hashtable ', () => {
        const hashTable = new HashTable();
        hashTable.add('firstName', 'Ahmad');
        hashTable.add('secondName', 'Moh');
        hashTable.add('Name', 'Amal');
        expect(hashTable.hash('firstName')).toEqual(0);
        expect(hashTable.hash('secondName')).toEqual(0);
    });
    it('Can Successfully retrieve a value from a bucket within the hashtable that has a collision ', () => {
        const hashTable = new HashTable();
        hashTable.add('firstName', 'Ahmad');
        hashTable.add('secondName', 'Moh');
        hashTable.add('Name', 'Amal');
        expect(hashTable.hash('firstName')).toEqual(0);
        expect(hashTable.hash('secondName')).toEqual(0);
        expect(hashTable.get('secondName')).toEqual('Moh');
    });
    it('Can Successfully hash a key to an in-range value ', () => {
        const hashTable = new HashTable(2);
        expect(hashTable.hash('secondName')).toEqual(0);
    });
});

