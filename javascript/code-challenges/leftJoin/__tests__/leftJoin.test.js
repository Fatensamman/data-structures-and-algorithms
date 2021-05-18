'use strict';
const leftJoin = require('../leftJoin.js');
const Hashtable = require('../../hashtable/hashtable.js');

it('should live and have mixed results', () => {
    const leftHash = new Hashtable(10);
    const rightHash = new Hashtable(10);
    leftHash.add('fond', 'enamored');
    leftHash.add('wrath', 'anger');
    leftHash.add('diligent', 'employed');

    rightHash.add('fond', 'averse');
    rightHash.add('wrath', 'delight');
    rightHash.add('flow', 'jam');

    expect(leftJoin(leftHash, rightHash)).toStrictEqual([ ['fond', 'enamored', 'averse'],['diligent', 'employed', null],['wrath', 'anger', 'delight']]);
});


it('should left join without any null', () => {
    const leftHash = new Hashtable(10);
    const rightHash = new Hashtable(10);

    leftHash.add('fodder', 'enamored');
    leftHash.add('wrath', 'anger');
    leftHash.add('inteligent', 'employed');

    rightHash.add('fodder', 'averse');
    rightHash.add('wrath', 'delight');
    rightHash.add('inteligent', 'jam');

    expect(leftJoin(leftHash, rightHash)).toStrictEqual([['fodder', 'enamored', 'averse'], ['inteligent','employed','jam'],['wrath', 'anger', 'delight']]);
});
it('should add null if the key doesnt exists ', () => {
    const leftHash = new Hashtable(10);
    const rightHash = new Hashtable(10);

    leftHash.add('pam', 'enamored');
    leftHash.add('wrath', 'anger');
    leftHash.add('diligent', 'unemployed');

    rightHash.add('fond', 'averse');
    rightHash.add('pam', 'delight');
    rightHash.add('flowers', 'jam');

    expect(leftJoin(leftHash, rightHash)).toStrictEqual([['diligent', 'unemployed', null], ['pam','enamored','delight'],['wrath', 'anger', null]]);
});
