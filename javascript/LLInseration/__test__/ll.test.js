'use strict';

const LinkedList = require("../linked-liat-inseration")

describe("link list", () => {

   test("Can successfully instantiate an empty linked list ", () => {
      let ll = new LinkedList();
      expect(ll.head).toBeNull();
  })

   test("Can successfully add a node to the end of the linked list", () => {
      let ll = new LinkedList();
      ll.insert(1);
      ll.insert(3);
      ll.insert(2);
      ll.insertLastNode(500);
      expect(ll.tail.data).toBe(500);
   })

   test("test the append ",()=>{
      let list = new LinkedList();
      list.insert(1);
      list.insert(2);
      list.append(100)
      expect(list.length).toBe(2);
    })
   test("Can successfully insert a node before a node located i the middle of a linked list", () => {
      let ll = new LinkedList();
      ll.insert(1);
      ll.insert(3);
      ll.insertBefore(1,101);
      expect(ll.head.data).toBe(101);
   })
   
   test("Can successfully insert a node after the last node of the linked list", () => {
      let ll = new LinkedList();
      ll.insert(1);
      ll.insert(3);
      ll.insertAfter(3,200);
      expect(ll.length).toBe(3);
   })

   describe("get all linkedlist data ", ()=>{
      test(" get data ",()=>{
        let list = new LinkedList();
        list.insert(2);
        list.insert(4);
        list.toString()
        expect(list.tail.data).toBe(2)
      })
    
      })

   
});

  