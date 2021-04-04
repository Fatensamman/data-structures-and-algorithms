'use strict';

const LinkedList = require('../linked-list.js');
const Node = require('../node.js');


describe('test linked list', () => {
  it(' It should instantiate an empty linked list', () => {
    let ll= new LinkedList;
    expect(ll.head).toEqual(null);
    expect(ll.size).toEqual(0);
  });
  it(' It should properly insert into the linked list', () => {
    let ll= new LinkedList;
    ll.insert(100);
    expect(ll.size).toEqual(1);
  });
  it(' The head property will properly point to the first node in the linked list', () => {
    let ll= new LinkedList;
    // let node = new Node(100);
    ll.insert(200);
    ll.insert(400);
    ll.insert(300);
    let linkedListArr =[];
    // let i = 0;
    let current = ll.head.amount;
    while(current){
      linkedListArr.push(current);
      current=current.next;
    }
    // let firstNode = ll.head.amount;
    expect(linkedListArr[0]).toEqual(300);
  });
  it(' It Can properly insert multiple nodes into the linked list', () => {
    let ll= new LinkedList;
    ll.insert(200);
    ll.insert(400);
    ll.insert(300);
    expect(ll.head.next.amount).toEqual(400);
    expect(ll.size).toEqual(3);
  });
  it(' It Will return true when finding a value within the linked list that exists and return false when the value doesnt exist ', () => {
    let ll= new LinkedList;
    ll.insert(200);
    ll.insert(400);
    ll.insert(300);
    expect(ll.includes(400)).toEqual(true);
    expect(ll.includes(100)).toEqual(false);
  });
  it('It Can properly return a collection of all the values that exist in the linked list', () => {
    let ll= new LinkedList;
    ll.insert(200);
    ll.insert(400);
    ll.insert(300);
    expect(ll.toString()).toEqual('{ 300 } -> { 400 } -> { 200 } -> NULL/');
  });
  it('It Can add a node to the end of the linked list', () => {
    let ll= new LinkedList;
    ll.insert(200);
    ll.insert(400);
    ll.insert(300);
    ll.append(500);
    expect(ll.toString()).toEqual('{ 300 } -> { 400 } -> { 200 } -> { 500 } -> NULL/');
  });
  it('It Can add multiple nodes to the end of a linked list', () => {
    let ll= new LinkedList;
    ll.insert(200);
    ll.insert(300);
    ll.append(500);
    ll.append(100);
    expect(ll.toString()).toEqual('{ 300 } -> { 200 } -> { 500 } -> { 100 } -> NULL/');
  });
  it('It Can insert a node before a node located i the middle of a linked list', () => {
    let ll= new LinkedList;
    ll.insert(200);
    ll.insert(300);
    ll.append(500);
    ll.append(100);
    ll.insertBefore(500,250);
    expect(ll.toString()).toEqual('{ 300 } -> { 200 } -> { 250 } -> { 500 } -> { 100 } -> NULL/');
  });
  it('It Can insert a node before the first node of a linked list', () => {
    let ll= new LinkedList;
    ll.insert(200);
    ll.insert(300);
    ll.append(500);
    ll.append(100);
    ll.insertBefore(300,250);
    expect(ll.toString()).toEqual('{ 250 } -> { 300 } -> { 200 } -> { 500 } -> { 100 } -> NULL/');
  });
  it('It Can insert after a node in the middle of the linked list', () => {
    let ll= new LinkedList;
    ll.insert(200);
    ll.insert(300);
    ll.append(500);
    ll.append(100);
    ll.insertAfter(200,250);
    expect(ll.toString()).toEqual('{ 300 } -> { 200 } -> { 250 } -> { 500 } -> { 100 } -> NULL/');
  });
  it('It Can insert a node after the last node of the linked list', () => {
    let ll= new LinkedList;
    ll.insert(200);
    ll.insert(300);
    ll.append(500);
    ll.append(100);
    ll.insertAfter(100,250);
    expect(ll.toString()).toEqual('{ 300 } -> { 200 } -> { 500 } -> { 100 } -> { 250 } -> NULL/');
  });
});
