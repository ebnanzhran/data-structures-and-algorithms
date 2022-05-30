'use strict'
function reverseString(string){
     let arr=string.split("")
     let arr2=[]
     for(let i=arr.length-1;i>=0;i--){
         arr2.push(arr[i]);
     }
     let newString=arr2.join("")
     return newString;
}