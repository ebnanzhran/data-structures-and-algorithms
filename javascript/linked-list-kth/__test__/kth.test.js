'use strict';
const LinkedList = require('../linkedList');

describe('ll test', () => {
  test('Can create  an empty linkedlist', () => {
    let ll = new LinkedList();
    expect(ll.head).toBeNull();
  });

test(' if k is greater than the length of linkedlist', () => {
  let ll = new LinkedList();
  ll.insert(8);
  ll.append(10)
  ll.append(20)
  ll.append(25)
  ll.append(28)
  ll.insertLastNode(35)
  expect(ll.kthFromEnd(7)).toBe('Exception');
});
test('if  k and the length of the list are the same', () => {
  let ll = new LinkedList();
  ll.insert(8);
  ll.append(10)
  ll.append(15)
  ll.append(20)
  ll.append(30)
  ll.insertLastNode(33)
  expect(ll.kthFromEnd(3)).toBe(20);
});
test('if k is less than 0 ', () => {
  let ll = new LinkedList();
ll.insert(8);
ll.append(10)
ll.append(15)
ll.append(20)
ll.append(30)
ll.insertLastNode(33)
  expect(ll.kthFromEnd(-1)).toBe('Exception');
});
test('if the linked list length =1 ', () => {
  let ll = new LinkedList();
ll.insertLastNode(33)
  expect(ll.kthFromEnd(1)).toBe(33);
});
test('if k is  in the middle of the linked list', () => {
  let ll = new LinkedList();
  ll.insert(8);
ll.append(10)
ll.append(15)
ll.append(20)
ll.append(30)
ll.insertLastNode(33)
  expect(ll.kthFromEnd(2)).toBe(30);
});
});