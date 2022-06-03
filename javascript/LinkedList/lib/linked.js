'use strict';
const Node = require('./node');


class linkedList {
    constructor() {
        //head
        this.head = null;
        //last value
        this.tail = null;
        //node length
        this.length = 0;
    }


    //add value to the first node
    addFirst(value){
        this.head=new Node(value,this.head)
    }


    //insert data in to the node
    insertValue(value){
        let node=new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }
        else{
            this.tail = node;
            this.tail.next = node;
            
             }
        this.length++;
    }

    //Searching for a value
    searchNode(value) {

        let cur = this.head;
        while (cur) {

            if (cur.value === value) {
                return true;
            }
            cur = cur.next;
        }
        return false;
    }

    

    //return all data in a parameter to make test if item added or not
        printAllData(){
            let cur = this.head;
            let data = "";
            while (cur) {
                data += cur.value + " | ";
                cur = cur.next;
            }
            return data;
        }
    //print data to the consol to test the code in console
        printConsole() {
            let cur = this.head;
            while (cur) {
                console.log(cur.value);
                current = cur.next;
            }
        }

    }
    //call class
    let con= new linkedList();
    con.printConsole();

    module.exports = linkedList;