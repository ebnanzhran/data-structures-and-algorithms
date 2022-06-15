'use strict';
const NewNode = require('../linked-list-kth/node');

class LinkedList {
  constructor() {
    this.head   = null;
    this.tail = null
    this.length = 0;
  }

  insert(data){
    this.length++;
    const newNode = new NewNode(data);
    // test if LL is empty or not
    if(!this.head){
        this.head=newNode;
        this.tail=newNode;
        return this;
    }
    else{
        let currentNode =this.head;
        while (currentNode.next) {
            currentNode = currentNode.next; 
        }
        currentNode.next= newNode;
        return this;
    }
}

insertLastNode(data) {

    const newNode = new NewNode(data);

    if (!this.head) {
        this.head = newNode;
    } else {
        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
        this.tail=newNode;
        console.log(this.tail);

    }

    this.length++;
}

toString() {
    let currentNode = this.head;
    let output ='';
  
    while (currentNode) {
   output = ` ${output}${currentNode.data} ->  ` ;
  
        currentNode = currentNode.next;
    }
    console.log(`${output}null`);
  }


  append(data) {
    if(!this.head) {
      this.head = new NewNode(data);
      
    }else{
      let current = this.head;
              while(current.next) {
        current = current.next;
      }
      
      current.next = new NewNode(data);
           }
  }

  insertBefore(data, newValue) {
    let newNode = new NewNode(newValue);
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode) {
      if (currentNode.data === data) {
        if (previousNode === null) {
          this.head = newNode;
          newNode.next = currentNode;
        } else {
          previousNode.next = newNode;
          newNode.next = currentNode;
        }
        this.length++;
        this.tail=newNode;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  insertAfter(data, newValue) {
    let newNode = new NewNode(newValue);
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
        this.tail= newNode;
        return;
      }
      currentNode = currentNode.next;
    }
  }

  kthFromEnd(k){
    let count =0 ;
    let currentNode =this.head ;
    while(currentNode){
    currentNode = currentNode.next;
    count++;
    }
    if(k>count){
      return 'Exception' ;
    }
    if(k<1){
    return 'Exception' ;
    }
    currentNode = this.head;
    for(let i=0; i<count-k; i++){
      currentNode = currentNode.next ;
    }
    console.log(`node at k ${k} : is     ${currentNode.data}`);
    
    return currentNode.data ;
    
      }


}


module.exports = LinkedList;