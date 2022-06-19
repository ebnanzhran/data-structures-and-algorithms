'use strict';
const LinkedList = require('../lib/linkedList');
const zipLists = require('../lib/function');

describe('Linked List Test', () => {
  test('Can successfully instantiate an empty linked list', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
  });
  test('Can properly insert into the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('bnan');
    expect(linkedList.head.value).toBe('bahaa');
  });
  test('The head property will properly point to the first node in the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('b');
    linkedList.Insert('m');
    linkedList.Insert('w');
    expect(linkedList.head.value).toBe('h');
  });
  test('Can properly insert multiple nodes into the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('bmw');
    linkedList.Insert('toyota');
    linkedList.Insert('honda');
    linkedList.Insert('hyonday');
    linkedList.Insert('mercedes');
    linkedList.Insert('hummer');
    expect(linkedList.length > 0).toBe(true);
  });
  test('Will return true when finding a value within the linked list that exists', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('bnan');
    expect(linkedList.Includes('bnan')).toBe(true);
  });
  test('Will return fale when searching for a value in the linked list that does not exists', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('bnan');
    expect(linkedList.Includes('zhran')).toBe(false);
  });
  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('b');
    linkedList.Insert('n');
    linkedList.Insert('a');
    linkedList.Insert('n');
    expect(linkedList.ToString()).toBe('n -> a -> n -> b -> ');
  });
  
  test('Can successfully add multiple nodes to the end of a linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('b');
    linkedList.Insert('n');
    linkedList.Insert('a');
    linkedList.Insert('n');
    linkedList.Insert('z');
    linkedList.append('h');
    linkedList.append('r');
    linkedList.append('a');
    linkedList.append('n');
    expect(linkedList.ToString()).toBe('z -> n -> a -> n -> b -> h -> r -> a -> n ->  ');
  });
  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('b');
    linkedList.Insert('n');
    linkedList.Insert('a');
    linkedList.insertBefore('a', 'c');
    expect(linkedList.ToString()).toBe('b -> n -> c -> a -> ');
  });
 
  test('Can successfully insert after a node in the middle of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('b');
    linkedList.Insert('n');
    linkedList.Insert('a');
    linkedList.insertAfter('a', 'c');
    expect(linkedList.ToString()).toBe('b -> n -> a -> c -> ');
  });
  test('Can successfully insert a node after the last node of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('b');
    linkedList.Insert('n');
    linkedList.Insert('a');
    linkedList.insertAfter('b', 'c');
    expect(linkedList.ToString()).toBe('b -> c -> n -> a -> ');
  });
  test('Where k is greater than the length of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('b');
    linkedList.Insert('n');
    linkedList.Insert('a');
    expect(linkedList.kthFromEnd(5)).toBe('Exception');
  });
  test('Where k and the length of the list are the same', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('b');
    linkedList.Insert('n');
    linkedList.Insert('a');
    expect(linkedList.kthFromEnd(3)).toBe('a');
  });
  test('Where k is not a positive integer', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('b');
    linkedList.Insert('n');
    linkedList.Insert('a');
    expect(linkedList.kthFromEnd(-1)).toBe('Exception');
  });
  test('Where the linked list is of a size 1', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('b');
    expect(linkedList.kthFromEnd(1)).toBe('b');
  });
  test('where k is not at the end, but somewhere in the middle of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.Insert('b');
    linkedList.Insert('n');
    linkedList.Insert('a');
    expect(linkedList.kthFromEnd(2)).toBe('n');
  });
  test('Zip the two linked lists together', () => {
    let linkedList1 = new LinkedList();
    linkedList1.Insert('b');
    linkedList1.Insert('n');
    linkedList1.Insert('a');
    let linkedList2 = new LinkedList();
    linkedList2.Insert('d');
    linkedList2.Insert('e');
    linkedList2.Insert('f');
    let newList = zipLists(linkedList1, linkedList2);
    expect(newList.ToString()).toBe('a -> f -> n -> e -> b -> d -> ');
  });
  test('Zip the two linked lists together, list2 had one more node', () => {
    let linkedList1 = new LinkedList();
    linkedList1.Insert('b');
    linkedList1.Insert('n');
    linkedList1.Insert('a');
    let linkedList2 = new LinkedList();
    linkedList2.Insert('d');
    linkedList2.Insert('e');
    linkedList2.Insert('f');
    linkedList2.Insert('g');
    let newList = zipLists(linkedList1, linkedList2);
    expect(newList.ToString()).toBe('a -> g -> n -> f -> b -> e -> d -> ');
  });
  test('Zip the two linked lists together, list1 had one more node', () => {
    let linkedList1 = new LinkedList();
    linkedList1.Insert('b');
    linkedList1.Insert('n');
    linkedList1.Insert('a');
    linkedList1.Insert('n');
    let linkedList2 = new LinkedList();
    linkedList2.Insert('d');
    linkedList2.Insert('e');
    linkedList2.Insert('f');
    let newList = zipLists(linkedList1, linkedList2);
    expect(newList.ToString()).toBe('n -> f -> a -> e -> n -> d -> b -> ');
  });
});