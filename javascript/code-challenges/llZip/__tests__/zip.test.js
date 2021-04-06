'use strict';

const LinkedList = require('../../linked-lists/linked-list.js');
const zipLists = require('../ll-zip');


describe('test merged two linked list!', () => {
  it(' It should instantiate a merged  linked list', () => {
    let ll1= new LinkedList ();
    ll1.append(44);
    ll1.append(88);
    let ll2= new LinkedList ();
    ll2.append(11);
    ll2.append(55);
    // let ll3= new LinkedList ();

    expect(zipLists(ll1,ll2)).toEqual('{ 44 } -> { 11 } -> { 88 } -> { 55 } -> NULL/');
  });
});
