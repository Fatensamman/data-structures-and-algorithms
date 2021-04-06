'use strict';

const LinkedList = require('../../linked-lists/linked-list.js');
const zipLists = require('../ll-zip');


describe('test merged two linked list!', () => {
  it(' It should instantiate a merged  linked list', () => {
    let ll1= new LinkedList;
    ll1.insert(44);
    ll1.insert(88);
    let ll2= new LinkedList;
    ll2.insert(11);
    ll2.insert(55);
    expect(zipLists(ll1,ll2)).toEqual('{ 88 } -> { 55 } -> { 44 } -> { 11 } -> NULL/');
  });
});
