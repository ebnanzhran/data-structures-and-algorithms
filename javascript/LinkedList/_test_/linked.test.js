'use strict';

const linkedList = require('../lib/linked');

describe("Can successfully all test in this LinkedList?",()=>{



    //Create and a face LinkedList
    it ("creat a LinkedList!", ()=>{
        let linkedL = new linkedList();
        expect(linkedL.head).toBeNull();
    })




    //Inserte more one node in LinkedList
    it ("Can properly insert multiple nodes into the linked list",()=>{
        let linkedL = new linkedList();
        linkedL.insertValue("BMW");
        linkedL.insertValue("Hyonday");
        linkedL.insertValue("Mercedes");
        linkedL.insertValue("Camry");
        expect(linkedL.length>1).toEqual(true);
      })



    //Check if can inserte in LinkedList
    it("Can properly insert into the LinkedList?", () => {
        let linkedL = new linkedList();
        linkedL.insertValue("BMW");
        expect(linkedL.head.value).toEqual('BMW');
      })


    
      
    //Check if all value returned from LinkedList
      test ("Is return all value in LinkedList?",()=>{
        let linkedL= new linkedList();
        linkedL.insertValue("BMW");
        linkedL.insertValue("Hyonday");
        linkedL.insertValue("Mercedes");
        linkedL.insertValue("Camry");
        expect(linkedL.printAllData()).toEqual("BMW | Hyonday | Mercedes | Camry | ");
      })



    //Check if head is in first node...
      it ("Is the head property in the first node in LinkedList?",()=>{
        let linkedL = new linkedList();
        linkedL.insertValue("BMW");
        linkedL.insertValue("Hyonday");
        linkedL.insertValue("Mercedes");
        linkedL.insertValue("Camry");
        expect(linkedL.head.value).toEqual("BMW");
      
      })

    //Search for a specefic node 
      it ("Is Search done",()=>{
        let list = new linkedList();
        list.insertValue("BMW")
        expect(list.searchNode("Camry")).toEqual(false)
      })
    
    });