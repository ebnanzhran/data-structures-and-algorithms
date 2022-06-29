"use strict";

const Queue = require("./queue");
const Node = require("./node");
class AnimalShelter {
  constructor() {
    this.cats = new Queue();
    this.dogs = new Queue();
  }
  enqueue(value) {
    if (value == "cat") {
      this.cats.enqueue(value);
    } else {
      if (value == "dog") {
        this.dogs.enqueue(value);
      } else console.log("this shelter only for cats or dogs");
    }
  }
  dequeue(pref)
  {
    if(pref=="cat")
    this.cats.dequeue();
    else{
        if(pref=="dog")
        this.dogs.dequeue();
        else return null;
    }
   
  }
}
module.exports = AnimalShelter;